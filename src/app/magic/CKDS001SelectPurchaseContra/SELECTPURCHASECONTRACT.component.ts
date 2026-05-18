import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SELECTPURCHASECONTRACT.mg.controls.g";
import { MgDisplayedColumns } from "./SELECTPURCHASECONTRACT.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDS001SelectPurchaseContra_SELECTPURCHASECONTRACT',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './SELECTPURCHASECONTRACT.component.html'
})
export class SELECTPURCHASECONTRACT extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SELECTPURCHASECONTRACT";
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
        return SELECTPURCHASECONTRACT.x;
    }
    Y() {
        return SELECTPURCHASECONTRACT.y;
    }
    Width(): string {
        return SELECTPURCHASECONTRACT.width;
    }
    Height(): string {
        return SELECTPURCHASECONTRACT.height;
    }
    IsCenteredToWindow() {
        return SELECTPURCHASECONTRACT.isCenteredToWindow;
    }
    FormName() {
        return SELECTPURCHASECONTRACT.formName;
    }
    ShowTitleBar() {
        return SELECTPURCHASECONTRACT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SELECTPURCHASECONTRACT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SELECTPURCHASECONTRACT.isResizable;
    }
    IsMovable() {
        return SELECTPURCHASECONTRACT.isMovable;
    }
    override displayedColumns = this.mgdp;
}