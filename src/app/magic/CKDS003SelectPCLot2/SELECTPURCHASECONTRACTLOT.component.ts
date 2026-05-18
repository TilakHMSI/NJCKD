import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SELECTPURCHASECONTRACTLOT.mg.controls.g";
import { MgDisplayedColumns } from "./SELECTPURCHASECONTRACTLOT.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDS003SelectPCLot2_SELECTPURCHASECONTRACTLOT',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './SELECTPURCHASECONTRACTLOT.component.html'
})
export class SELECTPURCHASECONTRACTLOT extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SELECTPURCHASECONTRACTLOT";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return SELECTPURCHASECONTRACTLOT.x;
    }
    Y() {
        return SELECTPURCHASECONTRACTLOT.y;
    }
    Width(): string {
        return SELECTPURCHASECONTRACTLOT.width;
    }
    Height(): string {
        return SELECTPURCHASECONTRACTLOT.height;
    }
    IsCenteredToWindow() {
        return SELECTPURCHASECONTRACTLOT.isCenteredToWindow;
    }
    FormName() {
        return SELECTPURCHASECONTRACTLOT.formName;
    }
    ShowTitleBar() {
        return SELECTPURCHASECONTRACTLOT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SELECTPURCHASECONTRACTLOT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SELECTPURCHASECONTRACTLOT.isResizable;
    }
    IsMovable() {
        return SELECTPURCHASECONTRACTLOT.isMovable;
    }
    override displayedColumns = this.mgdp;
}