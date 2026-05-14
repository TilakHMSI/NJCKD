import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SECTIONMASTEREntry.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CDKSECTIONMASTER_SECTIONMASTEREntry',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SECTIONMASTEREntry.component.html'
})
export class SECTIONMASTEREntry extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SECTIONMASTEREntry";
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
        return SECTIONMASTEREntry.x;
    }
    Y() {
        return SECTIONMASTEREntry.y;
    }
    Width(): string {
        return SECTIONMASTEREntry.width;
    }
    Height(): string {
        return SECTIONMASTEREntry.height;
    }
    IsCenteredToWindow() {
        return SECTIONMASTEREntry.isCenteredToWindow;
    }
    FormName() {
        return SECTIONMASTEREntry.formName;
    }
    ShowTitleBar() {
        return SECTIONMASTEREntry.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SECTIONMASTEREntry.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SECTIONMASTEREntry.isResizable;
    }
    IsMovable() {
        return SECTIONMASTEREntry.isMovable;
    }
}