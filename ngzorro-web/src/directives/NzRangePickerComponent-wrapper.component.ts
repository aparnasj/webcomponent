
import { Component, ElementRef, Injector, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
    selector: 'nz-range-picker-wrapper',
    template: `<nz-range-picker [nzRanges]="nzRanges"
    [nzSeparator]="nzSeparator"
    [nzShowTime]="nzShowTime"></nz-range-picker>`,
    standalone: true,
    imports: [FormsModule, NzDatePickerModule]
})
export class NzRangePickerComponentWrapperComponent {
    @Input() nzRanges: any;
    @Input() nzSeparator: any;
    @Input() nzShowTime: any;

    constructor() {
    }
}
    