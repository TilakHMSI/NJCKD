import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDPM023CaseCartonToCopy.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPM023CaseCartonToCopy_CKDPM023CaseCartonToCopy',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDPM023CaseCartonToCopy.component.html'
})
export class CKDPM023CaseCartonToCopy extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDPM023CaseCartonToCopy";
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
        return CKDPM023CaseCartonToCopy.x;
    }
    Y() {
        return CKDPM023CaseCartonToCopy.y;
    }
    Width(): string {
        return CKDPM023CaseCartonToCopy.width;
    }
    Height(): string {
        return CKDPM023CaseCartonToCopy.height;
    }
    IsCenteredToWindow() {
        return CKDPM023CaseCartonToCopy.isCenteredToWindow;
    }
    FormName() {
        return CKDPM023CaseCartonToCopy.formName;
    }
    ShowTitleBar() {
        return CKDPM023CaseCartonToCopy.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDPM023CaseCartonToCopy.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDPM023CaseCartonToCopy.isResizable;
    }
    IsMovable() {
        return CKDPM023CaseCartonToCopy.isMovable;
    }
}