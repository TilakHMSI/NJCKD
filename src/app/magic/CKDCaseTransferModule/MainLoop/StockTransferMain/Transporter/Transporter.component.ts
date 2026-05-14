import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Transporter.mg.controls.g";
import { MgDisplayedColumns } from "./Transporter.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDCaseTransferModule_MainLoop_StockTransferMain_Transporter_Transporter',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './Transporter.component.html'
})
export class Transporter extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Transporter";
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
        return Transporter.x;
    }
    Y() {
        return Transporter.y;
    }
    Width(): string {
        return Transporter.width;
    }
    Height(): string {
        return Transporter.height;
    }
    IsCenteredToWindow() {
        return Transporter.isCenteredToWindow;
    }
    FormName() {
        return Transporter.formName;
    }
    ShowTitleBar() {
        return Transporter.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Transporter.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return Transporter.isResizable;
    }
    IsMovable() {
        return Transporter.isMovable;
    }
    override displayedColumns = this.mgdp;
}