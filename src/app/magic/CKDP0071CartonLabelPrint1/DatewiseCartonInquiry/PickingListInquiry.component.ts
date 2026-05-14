import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PickingListInquiry.mg.controls.g";
import { MgDisplayedColumns } from "./PickingListInquiry.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-CKDP0071CartonLabelPrint1_DatewiseCartonInquiry_PickingListInquiry',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PickingListInquiry.component.html'
})
export class PickingListInquiry extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}