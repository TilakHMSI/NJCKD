import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDZ004CartonSelection.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ004BrowseCartonType_CKDZ004CartonSelection',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDZ004CartonSelection.component.html'
})
export class CKDZ004CartonSelection extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDZ004CartonSelection";
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
        return CKDZ004CartonSelection.x;
    }
    Y() {
        return CKDZ004CartonSelection.y;
    }
    Width(): string {
        return CKDZ004CartonSelection.width;
    }
    Height(): string {
        return CKDZ004CartonSelection.height;
    }
    IsCenteredToWindow() {
        return CKDZ004CartonSelection.isCenteredToWindow;
    }
    FormName() {
        return CKDZ004CartonSelection.formName;
    }
    ShowTitleBar() {
        return CKDZ004CartonSelection.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDZ004CartonSelection.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDZ004CartonSelection.isResizable;
    }
    IsMovable() {
        return CKDZ004CartonSelection.isMovable;
    }
}