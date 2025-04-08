import { createApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { Injector, NgZone } from '@angular/core';

import * as affix from 'ng-zorro-antd/affix';
import * as alert from 'ng-zorro-antd/alert';
import * as anchor from 'ng-zorro-antd/anchor';
import * as avatar from 'ng-zorro-antd/avatar';
import * as backTop from 'ng-zorro-antd/back-top';
import * as badge from 'ng-zorro-antd/badge';
import * as breadcrumb from 'ng-zorro-antd/breadcrumb';
import * as button from 'ng-zorro-antd/button';
import * as calendar from 'ng-zorro-antd/calendar';
import * as card from 'ng-zorro-antd/card';
import * as carousel from 'ng-zorro-antd/carousel';
import * as cascader from 'ng-zorro-antd/cascader';
import * as checkList from 'ng-zorro-antd/check-list';
import * as checkbox from 'ng-zorro-antd/checkbox';
import * as codeEditor from 'ng-zorro-antd/code-editor';
import * as collapse from 'ng-zorro-antd/collapse';
import * as colorPicker from 'ng-zorro-antd/color-picker';
import * as comment from 'ng-zorro-antd/comment';
import * as cronExpression from 'ng-zorro-antd/cron-expression';
import * as datePicker from 'ng-zorro-antd/date-picker';
import * as descriptions from 'ng-zorro-antd/descriptions';
import * as divider from 'ng-zorro-antd/divider';
import * as drawer from 'ng-zorro-antd/drawer';
import * as dropdown from 'ng-zorro-antd/dropdown';
import * as empty from 'ng-zorro-antd/empty';
import * as flex from 'ng-zorro-antd/flex';
import * as floatButton from 'ng-zorro-antd/float-button';
import * as form from 'ng-zorro-antd/form';
import * as graph from 'ng-zorro-antd/graph';
import * as grid from 'ng-zorro-antd/grid';
import * as hashCode from 'ng-zorro-antd/hash-code';
import * as icon from 'ng-zorro-antd/icon';
import * as image from 'ng-zorro-antd/image';
import * as input from 'ng-zorro-antd/input';
import * as inputNumber from 'ng-zorro-antd/input-number';
import * as layout from 'ng-zorro-antd/layout';
import * as list from 'ng-zorro-antd/list';
import * as mention from 'ng-zorro-antd/mention';
import * as menu from 'ng-zorro-antd/menu';
import * as message from 'ng-zorro-antd/message';
import * as modal from 'ng-zorro-antd/modal';
import * as notification from 'ng-zorro-antd/notification';
import * as pageHeader from 'ng-zorro-antd/page-header';
import * as pagination from 'ng-zorro-antd/pagination';
import * as popconfirm from 'ng-zorro-antd/popconfirm';
import * as popover from 'ng-zorro-antd/popover';
import * as progress from 'ng-zorro-antd/progress';
import * as radio from 'ng-zorro-antd/radio';
import * as rate from 'ng-zorro-antd/rate';
import * as resizable from 'ng-zorro-antd/resizable';
import * as result from 'ng-zorro-antd/result';
import * as segmented from 'ng-zorro-antd/segmented';
import * as select from 'ng-zorro-antd/select';
import * as skeleton from 'ng-zorro-antd/skeleton';
import * as slider from 'ng-zorro-antd/slider';
import * as space from 'ng-zorro-antd/space';
import * as spin from 'ng-zorro-antd/spin';
import * as statistic from 'ng-zorro-antd/statistic';
import * as steps from 'ng-zorro-antd/steps';
import * as switchComponent from 'ng-zorro-antd/switch';
import * as tabs from 'ng-zorro-antd/tabs';
import * as tag from 'ng-zorro-antd/tag';
import * as timePicker from 'ng-zorro-antd/time-picker';
import * as timeline from 'ng-zorro-antd/timeline';
import * as tooltip from 'ng-zorro-antd/tooltip';
import * as transfer from 'ng-zorro-antd/transfer';
import * as tree from 'ng-zorro-antd/tree';
import * as treeSelect from 'ng-zorro-antd/tree-select';
import * as treeView from 'ng-zorro-antd/tree-view';
import * as typography from 'ng-zorro-antd/typography';
import * as upload from 'ng-zorro-antd/upload';
import * as waterMark from 'ng-zorro-antd/water-mark';
import { NzMonthPickerComponentWrapperComponent } from './directives/NzMonthPickerComponent-wrapper.component';
import { NzQuarterPickerComponentWrapperComponent } from './directives/NzQuarterPickerComponent-wrapper.component';
import { NzRangePickerComponentWrapperComponent } from './directives/NzRangePickerComponent-wrapper.component';
import { NzTooltipDirectiveWrapperComponent } from './directives/NzTooltipDirective-wrapper.component';
import { NzWeekPickerComponentWrapperComponent } from './directives/NzWeekPickerComponent-wrapper.component';
import { NzYearPickerComponentWrapperComponent } from './directives/NzYearPickerComponent-wrapper.component';

async function bootstrap() {
  const app = await createApplication({ providers: [provideHttpClient()] });
  const injector: Injector = app.injector;
    Object.keys(affix).forEach(key => {
            const item = (affix as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(alert).forEach(key => {
            const item = (alert as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(anchor).forEach(key => {
            const item = (anchor as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(avatar).forEach(key => {
            const item = (avatar as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(backTop).forEach(key => {
            const item = (backTop as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(badge).forEach(key => {
            const item = (badge as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(breadcrumb).forEach(key => {
            const item = (breadcrumb as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(button).forEach(key => {
            const item = (button as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(calendar).forEach(key => {
            const item = (calendar as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(card).forEach(key => {
            const item = (card as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(carousel).forEach(key => {
            const item = (carousel as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(cascader).forEach(key => {
            const item = (cascader as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(checkList).forEach(key => {
            const item = (checkList as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(checkbox).forEach(key => {
            const item = (checkbox as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(codeEditor).forEach(key => {
            const item = (codeEditor as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(collapse).forEach(key => {
            const item = (collapse as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(colorPicker).forEach(key => {
            const item = (colorPicker as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(comment).forEach(key => {
            const item = (comment as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(cronExpression).forEach(key => {
            const item = (cronExpression as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(datePicker).forEach(key => {
            const item = (datePicker as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(descriptions).forEach(key => {
            const item = (descriptions as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(divider).forEach(key => {
            const item = (divider as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(drawer).forEach(key => {
            const item = (drawer as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(dropdown).forEach(key => {
            const item = (dropdown as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(empty).forEach(key => {
            const item = (empty as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(flex).forEach(key => {
            const item = (flex as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(floatButton).forEach(key => {
            const item = (floatButton as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(form).forEach(key => {
            const item = (form as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(graph).forEach(key => {
            const item = (graph as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(grid).forEach(key => {
            const item = (grid as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(hashCode).forEach(key => {
            const item = (hashCode as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(icon).forEach(key => {
            const item = (icon as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(image).forEach(key => {
            const item = (image as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(input).forEach(key => {
            const item = (input as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(inputNumber).forEach(key => {
            const item = (inputNumber as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(layout).forEach(key => {
            const item = (layout as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(list).forEach(key => {
            const item = (list as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(mention).forEach(key => {
            const item = (mention as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(menu).forEach(key => {
            const item = (menu as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(message).forEach(key => {
            const item = (message as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(modal).forEach(key => {
            const item = (modal as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(notification).forEach(key => {
            const item = (notification as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(pageHeader).forEach(key => {
            const item = (pageHeader as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(pagination).forEach(key => {
            const item = (pagination as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(popconfirm).forEach(key => {
            const item = (popconfirm as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(popover).forEach(key => {
            const item = (popover as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(progress).forEach(key => {
            const item = (progress as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(radio).forEach(key => {
            const item = (radio as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(rate).forEach(key => {
            const item = (rate as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(resizable).forEach(key => {
            const item = (resizable as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(result).forEach(key => {
            const item = (result as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(segmented).forEach(key => {
            const item = (segmented as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(select).forEach(key => {
            const item = (select as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(skeleton).forEach(key => {
            const item = (skeleton as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(slider).forEach(key => {
            const item = (slider as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(space).forEach(key => {
            const item = (space as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(spin).forEach(key => {
            const item = (spin as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(statistic).forEach(key => {
            const item = (statistic as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(steps).forEach(key => {
            const item = (steps as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(switchComponent).forEach(key => {
            const item = (switchComponent as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(tabs).forEach(key => {
            const item = (tabs as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(tag).forEach(key => {
            const item = (tag as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(timePicker).forEach(key => {
            const item = (timePicker as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(timeline).forEach(key => {
            const item = (timeline as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(tooltip).forEach(key => {
            const item = (tooltip as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(transfer).forEach(key => {
            const item = (transfer as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(tree).forEach(key => {
            const item = (tree as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(treeSelect).forEach(key => {
            const item = (treeSelect as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(treeView).forEach(key => {
            const item = (treeView as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(typography).forEach(key => {
            const item = (typography as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(upload).forEach(key => {
            const item = (upload as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    Object.keys(waterMark).forEach(key => {
            const item = (waterMark as any)[key];
            const isComponent = !!item?.ɵcmp;
            if (isComponent) {
              const tagName = 'nz-' + key.replace(/^Nz/, '').replace(/Component$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              if (!customElements.get(tagName)) {
                console.log('Defining component:', tagName);
                const el = createCustomElement(item, { injector });
                customElements.define(tagName, el);
              }
            }
          });    if (!customElements.get('nz-month-picker')) {
      console.log('Defining wrapper component:', 'nz-month-picker');
      const el = createCustomElement(NzMonthPickerComponentWrapperComponent, { injector });
      customElements.define('nz-month-picker-wrapper', el);
    }
    if (!customElements.get('nz-quarter-picker')) {
      console.log('Defining wrapper component:', 'nz-quarter-picker');
      const el = createCustomElement(NzQuarterPickerComponentWrapperComponent, { injector });
      customElements.define('nz-quarter-picker-wrapper', el);
    }
    if (!customElements.get('nz-range-picker')) {
      console.log('Defining wrapper component:', 'nz-range-picker');
      const el = createCustomElement(NzRangePickerComponentWrapperComponent, { injector });
      customElements.define('nz-range-picker-wrapper', el);
    }
    if (!customElements.get('nz-tooltip')) {
      console.log('Defining wrapper component:', 'nz-tooltip');
      const el = createCustomElement(NzTooltipDirectiveWrapperComponent, { injector });
      customElements.define('nz-tooltip-wrapper', el);
    }
    if (!customElements.get('nz-week-picker')) {
      console.log('Defining wrapper component:', 'nz-week-picker');
      const el = createCustomElement(NzWeekPickerComponentWrapperComponent, { injector });
      customElements.define('nz-week-picker-wrapper', el);
    }
    if (!customElements.get('nz-year-picker')) {
      console.log('Defining wrapper component:', 'nz-year-picker');
      const el = createCustomElement(NzYearPickerComponentWrapperComponent, { injector });
      customElements.define('nz-year-picker-wrapper', el);
    }
}

bootstrap();
