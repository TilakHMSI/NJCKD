import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLORCD_CM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-COLOURCODEMASTER_COLOURCODEMASTERList_COLORCD_CM_COLORCD_CM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './COLORCD_CM.component.html'
})
export class COLORCD_CM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLORCD_CM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return COLORCD_CM.x;
    }
    Y() {
        return COLORCD_CM.y;
    }
    Width(): string {
        return COLORCD_CM.width;
    }
    Height(): string {
        return COLORCD_CM.height;
    }
    IsCenteredToWindow() {
        return COLORCD_CM.isCenteredToWindow;
    }
    FormName() {
        return COLORCD_CM.formName;
    }
    ShowTitleBar() {
        return COLORCD_CM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLORCD_CM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLORCD_CM.isResizable;
    }
    IsMovable() {
        return COLORCD_CM.isMovable;
    }
}