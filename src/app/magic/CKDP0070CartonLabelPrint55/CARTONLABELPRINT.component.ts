import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CARTONLABELPRINT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0070CartonLabelPrint55_CARTONLABELPRINT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CARTONLABELPRINT.component.html'
})
export class CARTONLABELPRINT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CARTONLABELPRINT";
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
        return CARTONLABELPRINT.x;
    }
    Y() {
        return CARTONLABELPRINT.y;
    }
    Width(): string {
        return CARTONLABELPRINT.width;
    }
    Height(): string {
        return CARTONLABELPRINT.height;
    }
    IsCenteredToWindow() {
        return CARTONLABELPRINT.isCenteredToWindow;
    }
    FormName() {
        return CARTONLABELPRINT.formName;
    }
    ShowTitleBar() {
        return CARTONLABELPRINT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CARTONLABELPRINT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CARTONLABELPRINT.isResizable;
    }
    IsMovable() {
        return CARTONLABELPRINT.isMovable;
    }
}