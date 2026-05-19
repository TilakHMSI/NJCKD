import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDS005OKNO.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDS005OKNO_VPRDS005OKNO',
    providers: [...magicProviders],
    standalone: false,
    styleUrl: './VPRDS005OKNO.component.css',
    templateUrl: './VPRDS005OKNO.component.html'
})
export class VPRDS005OKNO extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDS005OKNO";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDS005OKNO.x;
    }
    Y() {
        return VPRDS005OKNO.y;
    }
    Width(): string {
        return VPRDS005OKNO.width;
    }
    Height(): string {
        return VPRDS005OKNO.height;
    }
    IsCenteredToWindow() {
        return VPRDS005OKNO.isCenteredToWindow;
    }
    FormName() {
        return VPRDS005OKNO.formName;
    }
    ShowTitleBar() {
        return VPRDS005OKNO.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDS005OKNO.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDS005OKNO.isResizable;
    }
    IsMovable() {
        return VPRDS005OKNO.isMovable;
    }
}