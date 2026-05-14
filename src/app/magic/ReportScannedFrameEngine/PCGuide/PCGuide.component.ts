import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PCGuide.mg.controls.g";
import { MgDisplayedColumns } from "./PCGuide.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-ReportScannedFrameEngine_PCGuide_PCGuide',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PCGuide.component.html'
})
export class PCGuide extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PCGuide";
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
        return PCGuide.x;
    }
    Y() {
        return PCGuide.y;
    }
    Width(): string {
        return PCGuide.width;
    }
    Height(): string {
        return PCGuide.height;
    }
    IsCenteredToWindow() {
        return PCGuide.isCenteredToWindow;
    }
    FormName() {
        return PCGuide.formName;
    }
    ShowTitleBar() {
        return PCGuide.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PCGuide.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PCGuide.isResizable;
    }
    IsMovable() {
        return PCGuide.isMovable;
    }
    override displayedColumns = this.mgdp;
}