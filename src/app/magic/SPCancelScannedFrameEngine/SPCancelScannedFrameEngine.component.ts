import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SPCancelScannedFrameEngine.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SPCancelScannedFrameEngine_SPCancelScannedFrameEngine',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SPCancelScannedFrameEngine.component.html'
})
export class SPCancelScannedFrameEngine extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SPCancelScannedFrameEngine";
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
        return SPCancelScannedFrameEngine.x;
    }
    Y() {
        return SPCancelScannedFrameEngine.y;
    }
    Width(): string {
        return SPCancelScannedFrameEngine.width;
    }
    Height(): string {
        return SPCancelScannedFrameEngine.height;
    }
    IsCenteredToWindow() {
        return SPCancelScannedFrameEngine.isCenteredToWindow;
    }
    FormName() {
        return SPCancelScannedFrameEngine.formName;
    }
    ShowTitleBar() {
        return SPCancelScannedFrameEngine.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SPCancelScannedFrameEngine.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SPCancelScannedFrameEngine.isResizable;
    }
    IsMovable() {
        return SPCancelScannedFrameEngine.isMovable;
    }
}