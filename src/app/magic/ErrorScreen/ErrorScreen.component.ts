import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ErrorScreen.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-ErrorScreen_ErrorScreen',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ErrorScreen.component.html'
})
export class ErrorScreen extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ErrorScreen";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return ErrorScreen.x;
    }
    Y() {
        return ErrorScreen.y;
    }
    Width(): string {
        return ErrorScreen.width;
    }
    Height(): string {
        return ErrorScreen.height;
    }
    IsCenteredToWindow() {
        return ErrorScreen.isCenteredToWindow;
    }
    FormName() {
        return ErrorScreen.formName;
    }
    ShowTitleBar() {
        return ErrorScreen.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ErrorScreen.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ErrorScreen.isResizable;
    }
    IsMovable() {
        return ErrorScreen.isMovable;
    }
}