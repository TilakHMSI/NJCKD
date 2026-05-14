import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CARTONWEIGHTLIMITSMODIFY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0100CartonSpecialApprov_CARTONWEIGHTLIMITSMODIFY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CARTONWEIGHTLIMITSMODIFY.component.html'
})
export class CARTONWEIGHTLIMITSMODIFY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CARTONWEIGHTLIMITSMODIFY";
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
        return CARTONWEIGHTLIMITSMODIFY.x;
    }
    Y() {
        return CARTONWEIGHTLIMITSMODIFY.y;
    }
    Width(): string {
        return CARTONWEIGHTLIMITSMODIFY.width;
    }
    Height(): string {
        return CARTONWEIGHTLIMITSMODIFY.height;
    }
    IsCenteredToWindow() {
        return CARTONWEIGHTLIMITSMODIFY.isCenteredToWindow;
    }
    FormName() {
        return CARTONWEIGHTLIMITSMODIFY.formName;
    }
    ShowTitleBar() {
        return CARTONWEIGHTLIMITSMODIFY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CARTONWEIGHTLIMITSMODIFY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CARTONWEIGHTLIMITSMODIFY.isResizable;
    }
    IsMovable() {
        return CARTONWEIGHTLIMITSMODIFY.isMovable;
    }
}