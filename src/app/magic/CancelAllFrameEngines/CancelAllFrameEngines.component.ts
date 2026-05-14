import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CancelAllFrameEngines.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CancelAllFrameEngines_CancelAllFrameEngines',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CancelAllFrameEngines.component.html'
})
export class CancelAllFrameEngines extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CancelAllFrameEngines";
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
        return CancelAllFrameEngines.x;
    }
    Y() {
        return CancelAllFrameEngines.y;
    }
    Width(): string {
        return CancelAllFrameEngines.width;
    }
    Height(): string {
        return CancelAllFrameEngines.height;
    }
    IsCenteredToWindow() {
        return CancelAllFrameEngines.isCenteredToWindow;
    }
    FormName() {
        return CancelAllFrameEngines.formName;
    }
    ShowTitleBar() {
        return CancelAllFrameEngines.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CancelAllFrameEngines.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CancelAllFrameEngines.isResizable;
    }
    IsMovable() {
        return CancelAllFrameEngines.isMovable;
    }
}