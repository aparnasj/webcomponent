
import { Component, ElementRef, Injector, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
    selector: 'nz-quarter-picker-wrapper',
    template: `<nz-quarter-picker ></nz-quarter-picker>`,
    standalone: true,
    imports: [FormsModule, NzDatePickerModule]
})
export class NzQuarterPickerComponentWrapperComponent {
    

    constructor() {
    }
}
    