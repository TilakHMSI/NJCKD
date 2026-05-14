import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CARTONWEIGHTDATA.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDR0040CartonWeightExtract_CARTONWEIGHTDATA',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CARTONWEIGHTDATA.component.html'
})
export class CARTONWEIGHTDATA extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CARTONWEIGHTDATA";
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
        return CARTONWEIGHTDATA.x;
    }
    Y() {
        return CARTONWEIGHTDATA.y;
    }
    Width(): string {
        return CARTONWEIGHTDATA.width;
    }
    Height(): string {
        return CARTONWEIGHTDATA.height;
    }
    IsCenteredToWindow() {
        return CARTONWEIGHTDATA.isCenteredToWindow;
    }
    FormName() {
        return CARTONWEIGHTDATA.formName;
    }
    ShowTitleBar() {
        return CARTONWEIGHTDATA.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CARTONWEIGHTDATA.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CARTONWEIGHTDATA.isResizable;
    }
    IsMovable() {
        return CARTONWEIGHTDATA.isMovable;
    }
}