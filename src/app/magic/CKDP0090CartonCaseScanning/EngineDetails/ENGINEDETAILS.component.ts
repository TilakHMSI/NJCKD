import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENGINEDETAILS.mg.controls.g";
import { MgDisplayedColumns } from "./ENGINEDETAILS.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0090CartonCaseScanning_EngineDetails_ENGINEDETAILS',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './ENGINEDETAILS.component.html'
})
export class ENGINEDETAILS extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ENGINEDETAILS";
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
        return ENGINEDETAILS.x;
    }
    Y() {
        return ENGINEDETAILS.y;
    }
    Width(): string {
        return ENGINEDETAILS.width;
    }
    Height(): string {
        return ENGINEDETAILS.height;
    }
    IsCenteredToWindow() {
        return ENGINEDETAILS.isCenteredToWindow;
    }
    FormName() {
        return ENGINEDETAILS.formName;
    }
    ShowTitleBar() {
        return ENGINEDETAILS.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ENGINEDETAILS.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ENGINEDETAILS.isResizable;
    }
    IsMovable() {
        return ENGINEDETAILS.isMovable;
    }
    override displayedColumns = this.mgdp;
}