
import { Component, ElementRef, Injector, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
    selector: 'nz-month-picker-wrapper',
    template: `<nz-month-picker ></nz-month-picker>`,
    standalone: true,
    imports: [FormsModule, NzDatePickerModule]
})
export class NzMonthPickerComponentWrapperComponent {
    

    constructor() {
    }
}
    