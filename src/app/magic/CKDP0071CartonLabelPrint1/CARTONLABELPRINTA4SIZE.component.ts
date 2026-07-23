import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CARTONLABELPRINTA4SIZE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0071CartonLabelPrint1_CARTONLABELPRINTA4SIZE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CARTONLABELPRINTA4SIZE.component.html'
})
export class CARTONLABELPRINTA4SIZE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CARTONLABELPRINTA4SIZE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1100px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CARTONLABELPRINTA4SIZE.x;
    }
    Y() {
        return CARTONLABELPRINTA4SIZE.y;
    }
    Width(): string {
        return CARTONLABELPRINTA4SIZE.width;
    }
    Height(): string {
        return CARTONLABELPRINTA4SIZE.height;
    }
    IsCenteredToWindow() {
        return CARTONLABELPRINTA4SIZE.isCenteredToWindow;
    }
    FormName() {
        return CARTONLABELPRINTA4SIZE.formName;
    }
    ShowTitleBar() {
        return CARTONLABELPRINTA4SIZE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CARTONLABELPRINTA4SIZE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CARTONLABELPRINTA4SIZE.isResizable;
    }
    IsMovable() {
        return CARTONLABELPRINTA4SIZE.isMovable;
    }
}