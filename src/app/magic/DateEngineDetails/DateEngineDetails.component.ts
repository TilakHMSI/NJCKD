import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DateEngineDetails.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DateEngineDetails_DateEngineDetails',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DateEngineDetails.component.html'
})
export class DateEngineDetails extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DateEngineDetails";
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
        return DateEngineDetails.x;
    }
    Y() {
        return DateEngineDetails.y;
    }
    Width(): string {
        return DateEngineDetails.width;
    }
    Height(): string {
        return DateEngineDetails.height;
    }
    IsCenteredToWindow() {
        return DateEngineDetails.isCenteredToWindow;
    }
    FormName() {
        return DateEngineDetails.formName;
    }
    ShowTitleBar() {
        return DateEngineDetails.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DateEngineDetails.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DateEngineDetails.isResizable;
    }
    IsMovable() {
        return DateEngineDetails.isMovable;
    }
}