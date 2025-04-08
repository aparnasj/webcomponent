
import { Component, ElementRef, Injector, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
    selector: 'nz-week-picker-wrapper',
    template: `<nz-week-picker ></nz-week-picker>`,
    standalone: true,
    imports: [FormsModule, NzDatePickerModule]
})
export class NzWeekPickerComponentWrapperComponent {
    

    constructor() {
    }
}
    