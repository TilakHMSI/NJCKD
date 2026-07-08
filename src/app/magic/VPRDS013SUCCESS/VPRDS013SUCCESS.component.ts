import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDS013SUCCESS.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDS013SUCCESS_VPRDS013SUCCESS',
    providers: [...magicProviders],
    standalone: false,
    styleUrl: './VPRDS013SUCCESS.component.css',
    templateUrl: './VPRDS013SUCCESS.component.html'
})
export class VPRDS013SUCCESS extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDS013SUCCESS";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "230px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDS013SUCCESS.x;
    }
    Y() {
        return VPRDS013SUCCESS.y;
    }
    Width(): string {
        return VPRDS013SUCCESS.width;
    }
    Height(): string {
        return VPRDS013SUCCESS.height;
    }
    IsCenteredToWindow() {
        return VPRDS013SUCCESS.isCenteredToWindow;
    }
    FormName() {
        return VPRDS013SUCCESS.formName;
    }
    ShowTitleBar() {
        return VPRDS013SUCCESS.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDS013SUCCESS.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDS013SUCCESS.isResizable;
    }
    IsMovable() {
        return VPRDS013SUCCESS.isMovable;
    }
}