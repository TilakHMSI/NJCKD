import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDInHousePartTransfer.mg.controls.g";
import { MgDisplayedColumns } from "./CKDInHousePartTransfer.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-CKDCaseTransferModule_MainLoop_StockTransferMain_StockTransferDetails_CKDInHousePartTransfer',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './CKDInHousePartTransfer.component.html'
})
export class CKDInHousePartTransfer extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}