import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CancelScannedFrameEngine.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CancelScannedFrameEngine_CancelScannedFrameEngine',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CancelScannedFrameEngine.component.html'
})
export class CancelScannedFrameEngine extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CancelScannedFrameEngine";
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
        return CancelScannedFrameEngine.x;
    }
    Y() {
        return CancelScannedFrameEngine.y;
    }
    Width(): string {
        return CancelScannedFrameEngine.width;
    }
    Height(): string {
        return CancelScannedFrameEngine.height;
    }
    IsCenteredToWindow() {
        return CancelScannedFrameEngine.isCenteredToWindow;
    }
    FormName() {
        return CancelScannedFrameEngine.formName;
    }
    ShowTitleBar() {
        return CancelScannedFrameEngine.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CancelScannedFrameEngine.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CancelScannedFrameEngine.isResizable;
    }
    IsMovable() {
        return CancelScannedFrameEngine.isMovable;
    }
}