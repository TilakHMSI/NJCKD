import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDZ003CaseType.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ003BrowseCaseType_CKDZ003CaseType',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDZ003CaseType.component.html'
})
export class CKDZ003CaseType extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDZ003CaseType";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return CKDZ003CaseType.x;
    }
    Y() {
        return CKDZ003CaseType.y;
    }
    Width(): string {
        return CKDZ003CaseType.width;
    }
    Height(): string {
        return CKDZ003CaseType.height;
    }
    IsCenteredToWindow() {
        return CKDZ003CaseType.isCenteredToWindow;
    }
    FormName() {
        return CKDZ003CaseType.formName;
    }
    ShowTitleBar() {
        return CKDZ003CaseType.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDZ003CaseType.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDZ003CaseType.isResizable;
    }
    IsMovable() {
        return CKDZ003CaseType.isMovable;
    }
}