import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDPARAMETERS.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDMST1CKDParameters_CKDPARAMETERS',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDPARAMETERS.component.html'
})
export class CKDPARAMETERS extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDPARAMETERS";
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
        return CKDPARAMETERS.x;
    }
    Y() {
        return CKDPARAMETERS.y;
    }
    Width(): string {
        return CKDPARAMETERS.width;
    }
    Height(): string {
        return CKDPARAMETERS.height;
    }
    IsCenteredToWindow() {
        return CKDPARAMETERS.isCenteredToWindow;
    }
    FormName() {
        return CKDPARAMETERS.formName;
    }
    ShowTitleBar() {
        return CKDPARAMETERS.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDPARAMETERS.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDPARAMETERS.isResizable;
    }
    IsMovable() {
        return CKDPARAMETERS.isMovable;
    }
}