import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDS012WARNING.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDS012WARNING_VPRDS012WARNING',
    providers: [...magicProviders],
    standalone: false,
    styleUrl: './VPRDS012WARNING.component.css',
    templateUrl: './VPRDS012WARNING.component.html'
})
export class VPRDS012WARNING extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDS012WARNING";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "200px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDS012WARNING.x;
    }
    Y() {
        return VPRDS012WARNING.y;
    }
    Width(): string {
        return VPRDS012WARNING.width;
    }
    Height(): string {
        return VPRDS012WARNING.height;
    }
    IsCenteredToWindow() {
        return VPRDS012WARNING.isCenteredToWindow;
    }
    FormName() {
        return VPRDS012WARNING.formName;
    }
    ShowTitleBar() {
        return VPRDS012WARNING.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDS012WARNING.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDS012WARNING.isResizable;
    }
    IsMovable() {
        return VPRDS012WARNING.isMovable;
    }
}