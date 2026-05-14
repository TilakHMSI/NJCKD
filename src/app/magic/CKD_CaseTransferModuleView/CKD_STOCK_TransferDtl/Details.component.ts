import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Details.mg.controls.g";
import { MgDisplayedColumns } from "./Details.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKD_CaseTransferModuleView_CKD_STOCK_TransferDtl_Details',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './Details.component.html'
})
export class Details extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Details";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return Details.x;
    }
    Y() {
        return Details.y;
    }
    Width(): string {
        return Details.width;
    }
    Height(): string {
        return Details.height;
    }
    IsCenteredToWindow() {
        return Details.isCenteredToWindow;
    }
    FormName() {
        return Details.formName;
    }
    ShowTitleBar() {
        return Details.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Details.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return Details.isResizable;
    }
    IsMovable() {
        return Details.isMovable;
    }
    override displayedColumns = this.mgdp;
}