
import { Component, ElementRef, Injector, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
    selector: 'nz-year-picker-wrapper',
    template: `<nz-year-picker ></nz-year-picker>`,
    standalone: true,
    imports: [FormsModule, NzDatePickerModule]
})
export class NzYearPickerComponentWrapperComponent {
    

    constructor() {
    }
}
    