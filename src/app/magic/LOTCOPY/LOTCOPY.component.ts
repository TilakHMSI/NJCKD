import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LOTCOPY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-LOTCOPY_LOTCOPY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './LOTCOPY.component.html'
})
export class LOTCOPY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LOTCOPY";
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
        return LOTCOPY.x;
    }
    Y() {
        return LOTCOPY.y;
    }
    Width(): string {
        return LOTCOPY.width;
    }
    Height(): string {
        return LOTCOPY.height;
    }
    IsCenteredToWindow() {
        return LOTCOPY.isCenteredToWindow;
    }
    FormName() {
        return LOTCOPY.formName;
    }
    ShowTitleBar() {
        return LOTCOPY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LOTCOPY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LOTCOPY.isResizable;
    }
    IsMovable() {
        return LOTCOPY.isMovable;
    }
}