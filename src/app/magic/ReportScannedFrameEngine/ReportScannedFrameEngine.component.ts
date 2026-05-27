import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ReportScannedFrameEngine.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-ReportScannedFrameEngine_ReportScannedFrameEngine',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ReportScannedFrameEngine.component.html'
})
export class ReportScannedFrameEngine extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ReportScannedFrameEngine";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1000px";
    private static readonly height: string = "520px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return ReportScannedFrameEngine.x;
    }
    Y() {
        return ReportScannedFrameEngine.y;
    }
    Width(): string {
        return ReportScannedFrameEngine.width;
    }
    Height(): string {
        return ReportScannedFrameEngine.height;
    }
    IsCenteredToWindow() {
        return ReportScannedFrameEngine.isCenteredToWindow;
    }
    FormName() {
        return ReportScannedFrameEngine.formName;
    }
    ShowTitleBar() {
        return ReportScannedFrameEngine.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ReportScannedFrameEngine.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ReportScannedFrameEngine.isResizable;
    }
    IsMovable() {
        return ReportScannedFrameEngine.isMovable;
    }
}