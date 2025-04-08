
import { Component, ElementRef, Injector, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
    selector: 'nz-tooltip-wrapper',
    template: `<span nz-tooltip [nzTooltipTitle]="nzTooltipTitle"
    [nzTooltipPlacement]="nzTooltipPlacement"
    [nzTooltipColor]="nzTooltipColor">Dummy text</span>`,
    standalone: true,
    imports: [FormsModule, NzToolTipModule]
})
export class NzTooltipDirectiveWrapperComponent {
    @Input() nzTooltipTitle: any;
    @Input() nzTooltipPlacement: any;
    @Input() nzTooltipColor: any;

    constructor() {
    }
}
    