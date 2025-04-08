const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const webConfig = require('./config.json');

const packageName = webConfig.package;
const directiveTags = {};
// Path to NG-ZORRO source files
const PROJECT_NAME = 'ngzorro-web';
const OUTPUT_DIR = 'ngzorro-web-output';
const NG_ZORRO_PATH = path.join(__dirname, `${PROJECT_NAME}/node_modules`, packageName);
const ZORRO_NODE_MODULES_PATH = path.join(PROJECT_NAME, 'node_modules', `${packageName}`);
function ensureAngularCLI() {
    try {
        execSync('ng version', { stdio: 'ignore' });
    } catch (error) {
        console.log('Angular CLI not found. Installing globally...');
        execSync('npm install -g @angular/cli@19', { stdio: 'inherit' });
        console.log('Angular CLI installed globally.');
    }
}

function ensureNodeVersion() {
    try {
        const nodeVersion = execSync('node -v', { encoding: 'utf8' }).trim();
        console.log(`Using Node.js version: ${nodeVersion}`);
    } catch (error) {
        console.error('Node.js is not installed or not accessible. Please install Node.js and retry.');
        process.exit(1);
    }
}

function createAngularProject() {
    if (fs.existsSync(PROJECT_NAME)) {
        console.log('Angular project already exists. Skipping creation.');
        return;
    }
    console.log('Creating new Angular project...');
    try {
        execSync(`npx @angular/cli new ${PROJECT_NAME} --defaults --skip-git`, { stdio: 'inherit' });
        console.log('Angular project created.');
    } catch (error) {
        console.error('Failed to create Angular project. Retrying...');
        rmSync(PROJECT_NAME, { recursive: true, force: true });
        execSync(`npx @angular/cli new ${PROJECT_NAME} --defaults --skip-git`, { stdio: 'inherit' });
    }
}

function installDependencies() {
    console.log('Clearing npm cache...');
    execSync('npm cache clean --force', { stdio: 'inherit' });

    console.log('Installing dependencies individually...');
    const packages = [
        `${packageName}@latest`,
        '@angular/elements@latest',
        '@angular/core@latest',
        '@angular/common@latest',
        '@angular/platform-browser@latest',
        '@angular/cli@latest',
        '@angular/animations',
        'dagre-compound',
        'd3-transition',
        'd3-zoom',
        'd3-selection',
        'd3-drag',
        'd3-shape',
        'cron-parser'
    ];
    const packageJsonPath = path.join(PROJECT_NAME, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    packages.forEach(pkg => {
        if (!packageJson.devDependencies || (!packageJson.devDependencies[pkg] && !packageJson.devDependencies[pkg.replace('@latest', '')])) {
            console.log(`Installing ${pkg}...`);
            execSync(`cd ${PROJECT_NAME} && npm install ${pkg} --save-dev --legacy-peer-deps`, { stdio: 'inherit' });
        }
    });

    console.log('Dependencies installed.');
}

function getNgZorroModules() {
    if (!fs.existsSync(ZORRO_NODE_MODULES_PATH)) {
        console.error('NG-ZORRO is not installed properly. Please check the installation.');
        process.exit(1);
    }
    return fs.readdirSync(ZORRO_NODE_MODULES_PATH).filter(dir => {
        return fs.existsSync(path.join(ZORRO_NODE_MODULES_PATH, dir, `${dir}.module.d.ts`));
    });
}

function generateWebComponents() {
    console.log('Generating Web Components from NG-ZORRO components...');

    const mainFilePath = path.join(PROJECT_NAME, 'src', 'main.ts');

    let mainFileContent = `import { createApplication } from '@angular/platform-browser';\n` +
        `import { provideHttpClient } from '@angular/common/http';\n` +
        `import { createCustomElement } from '@angular/elements';\n` +
        `import { Injector, NgZone } from '@angular/core';\n\n`;

    const zorroModules = getNgZorroModules();
    console.log('Detected NG-ZORRO modules:', zorroModules);
    zorroModules.forEach(moduleName => {
        let alias = moduleName.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
        if (alias === 'switch') {
            alias = 'switchComponent';
        }
        if (alias === 'splitter') {
            return;
        }
        mainFileContent += `import * as ${alias} from '${packageName}/${moduleName}';\n`;
        processModule(moduleName);
    });
    // Import wrapper components from src/directives/
    const directivesPath = path.join(PROJECT_NAME, 'src', 'directives');
    let directiveFiles;
    if (fs.existsSync(directivesPath)) {
        directiveFiles = fs.readdirSync(directivesPath).filter(file => file.endsWith('.ts') && !file.endsWith('.d.ts'));


        directiveFiles.forEach(file => {
            const directiveName = path.basename(file, '.ts'); // Remove .ts extension

            const className = directiveName.replace('-wrapper.component', 'WrapperComponent'); // Example: NzRangePickerWrapperComponent
            mainFileContent += `import { ${className} } from './directives/${directiveName}';\n`;
        });
    }

    mainFileContent += `\nasync function bootstrap() {\n` +
        `  const app = await createApplication({ providers: [provideHttpClient()] });\n` +
        `  const injector: Injector = app.injector;\n`;

    zorroModules.forEach(moduleName => {
        let alias = moduleName.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
        if (alias === 'switch') {
            alias = 'switchComponent';
        }
        if (alias === 'splitter') { // comeback on why they are treated as dynamic modules
            return;
        }

        mainFileContent += `    Object.keys(${alias}).forEach(key => {
            const item = (${alias} as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });`
    });

    // Register Wrapper Components as Web Components
    if (fs.existsSync(directivesPath)) {
        directiveFiles.forEach(file => {
            const directiveName = path.basename(file, '.ts'); // Remove .ts extension
            const className = directiveName.replace('-wrapper.component', 'WrapperComponent'); // Example: NzRangePickerWrapperComponent
            const tagName = directiveTags[className]; // Example: app-nz-range-picker-wrapper

            mainFileContent += `    if (!customElements.get('${tagName}')) {\n` +
                `      console.log('Defining wrapper component:', '${tagName}');\n` +
                `      const el = createCustomElement(${className}, { injector });\n` +
                `      customElements.define('${tagName}-wrapper', el);\n` +
                `    }\n`;
        });
    }

    mainFileContent += `}\n\nbootstrap();\n`;

    fs.writeFileSync(mainFilePath, mainFileContent, 'utf8');
    console.log('Main file updated for bootstrapping and defining web components.');
}


function buildProject() {
    console.log('Building Angular project...');

    const angularJsonPath = path.join(PROJECT_NAME, 'angular.json');
    const angularConfig = JSON.parse(fs.readFileSync(angularJsonPath, 'utf8'));
    const defaultProject = angularConfig.defaultProject || PROJECT_NAME;

    // ✅ Ensure global styles are included
    angularConfig.projects[defaultProject].architect.build.options.styles = [
        `node_modules/${packageName}/${packageName}.min.css`
    ];

    // ✅ Increase budget limits to prevent build failures
    angularConfig.projects[defaultProject].architect.build.configurations.production.budgets = [
        {
            type: "initial",
            maximumWarning: "5mb",
            maximumError: "10mb"
        },
        {
            type: "anyComponentStyle",
            maximumWarning: "1mb",
            maximumError: "2mb"
        }
    ];
    angularConfig.projects[defaultProject].architect.build.configurations.production.outputHashing = 'none';

    // ✅ Write back to angular.json
    fs.writeFileSync(angularJsonPath, JSON.stringify(angularConfig, null, 2), 'utf8');
    console.log('Updated angular.json to include styles and increase build budget.');


    execSync(`cd ${PROJECT_NAME} && ng build ${defaultProject} --configuration=production --verbose`, { stdio: 'inherit' });
    console.log('Build complete.');

    const distDir = path.join(PROJECT_NAME, 'dist', defaultProject, 'browser');
    if (!fs.existsSync(distDir)) {
        console.error('Build output not found!');
        return;
    }

    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    ['main.js', 'styles.css', 'polyfills.js'].forEach(file => {
        const filePath = path.join(distDir, file);
        if (fs.existsSync(filePath)) {
            fs.copyFileSync(filePath, path.join(OUTPUT_DIR, file));
            console.log(`Copied ${file} to ${OUTPUT_DIR}`);
        } else {
            console.warn(`${file} not found in build output.`);
        }
    });
}

function main() {
    ensureNodeVersion();
    ensureAngularCLI();
    createAngularProject();
    installDependencies();
    generateWebComponents();
    buildProject();
    console.log(`Web component build is available in ${OUTPUT_DIR}`);
}

main();


function findDirectives(modulePath, componentName) {
    const files = fs.readdirSync(modulePath);
    let directives = [];
    files.forEach(file => {
        if (file.endsWith('.d.ts')) {
            const filePath = path.join(modulePath, file);
            const content = fs.readFileSync(filePath, 'utf8');

            // Match class declarations
            const classMatch = content.match(/export declare class (\w+)/);
            if (classMatch) {
                const directiveName = classMatch[1];
                // Check if it's a directive by looking for ɵdir
                if (content.includes('static ɵdir')) {
                    // Extract the selector value (only tag-based selectors)
                    const dirMatch = content.match(/static ɵdir: i0\.ɵɵDirectiveDeclaration<[^,]+, "([^"'\[\]]+)",/);
                    if (dirMatch) {
                        const selector = dirMatch[1].trim(); // Extracted selector
                        directives.push({ name: directiveName, keyName:selector, selector });
                    } else {
                        const match = content.match(/static ɵdir: i0\.ɵɵDirectiveDeclaration<[^,]+, "([^"]+)",/);
                        if (match) {
                            const dirSelectorDefined = match[1];
                            const directiveInfo  = findMatchingDirective(dirSelectorDefined, webConfig.directives);
                            if (directiveInfo.length) 
                                directives.push({ name: directiveName, keyName: dirSelectorDefined, selector: directiveInfo[0].directive.selector, template: directiveInfo[0].directive.template });
                        }
                    }
                }
            }
        }
    });
    return directives;
}

function findMatchingDirective(selector, directivesMap) {
    const selectors = selector.split(',');
    return selectors.map((selector) => {
        return {
            selector,
            directive: directivesMap[selector] || null
        }
    }).filter(entry => {
        return entry.directive !== null
    });
}


function generateWrapperComponent(directive, componentInputs, moduleClassName, moduleName) {
    const directiveName = directive.name;
    const directiveSelector = directive.selector;
    // Ensure the directive selector is valid
    if (!directiveSelector || !/^[a-zA-Z0-9-,\s]+$/.test(directiveSelector)) {
        console.error(`Invalid selector: ${directiveSelector}`);
        return '';
    }

    // Extract only element selectors (ignore attribute selectors)
    const tagSelectors = directiveSelector
        .split(',')
        .map(sel => sel.trim())
        .filter(sel => !sel.startsWith('[')); // Ignore attribute selectors
    if (tagSelectors.length === 0) {
        console.error(`No valid tag selectors found for: ${directiveSelector}`);
        return '';
    }

    // Use the first valid tag selector
    const primarySelector = tagSelectors[0];

    // Convert inputs to @Input properties
    const inputBindings = componentInputs
        .map(input => `@Input() ${input}: any;`)
        .join('\n    ');
    const inputTemplate = componentInputs
        .map(input => `[${input}]="${input}"`)
        .join('\n    ');
    directiveTags[`${directiveName}` + 'WrapperComponent'] = primarySelector;
    if (componentInputs.length)
        // Modify directive.template dynamically
        directive.template = directive.template?.replace(
            /<([^>]+)>/,  // Find the first opening tag
            `<$1 ${inputTemplate}>`  // Inject detected inputs
        ); 
    const templateStr = directive.template || `<${primarySelector} ${inputTemplate}></${primarySelector}>`;
    // Generate component file content  
    const componentWrapperContent = `
import { Component, ElementRef, Injector, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ${moduleClassName} } from 'ng-zorro-antd/${moduleName}';

@Component({
    selector: '${primarySelector}-wrapper',
    template: \`${templateStr}\`,
    standalone: true,
    imports: [FormsModule, ${moduleClassName}]
})
export class ${directiveName}WrapperComponent {
    ${inputBindings}

    constructor() {
    }
}
    `;
    return componentWrapperContent;
}

function processModule(moduleName) {
    if (moduleName === 'skeleton' || moduleName === 'list') { // comeback on why they are treated as dynamic modules
        return;
    }
    const modulePath = path.join(NG_ZORRO_PATH, moduleName);
    let componentFilePath = path.join(modulePath, `${moduleName}.component.d.ts`);
    if (!fs.existsSync(componentFilePath)) {
        componentFilePath = path.join(modulePath, `${moduleName}.directive.d.ts`);
        if (!fs.existsSync(componentFilePath)) 
            console.log(`Component file not found: ${componentFilePath}`);
    }
    const directives = findDirectives(modulePath, moduleName);

    const files = fs.readdirSync(modulePath);
    let moduleClassName;
    files.forEach(file => {
        if (file.endsWith('.module.d.ts')) {
            const filePath = path.join(modulePath, file);
            const content = fs.readFileSync(filePath, 'utf8');

            // Match class declarations
            contentMatch = content.match(/export declare class (\w+)/);
            if (contentMatch) {
                moduleClassName = contentMatch[1];
            }
        }
    });
    directives.forEach(directive => {
        let inputs = [];
        const directiveInfo = webConfig.directives[directive.keyName];
        if (directiveInfo) {
            inputs = directiveInfo.inputs;
        }
        const wrapperContent = generateWrapperComponent(directive, inputs, moduleClassName, moduleName);
        const directivesPath = path.join(__dirname, 'ngzorro-web/src', 'directives');
        // Ensure the directory exists
        if (!fs.existsSync(directivesPath)) {
            fs.mkdirSync(directivesPath, { recursive: true });
        }
        const wrapperFilePath = path.join(directivesPath, `${directive.name}-wrapper.component.ts`);
        
        fs.writeFileSync(wrapperFilePath, wrapperContent, 'utf8');
        console.log(`Generated wrapper for ${directive}: ${wrapperFilePath}`);
    });
}
