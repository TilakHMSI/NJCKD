import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDR0010PMRequiredRepor2.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDR0010PMRequiredRepor_CKDR0010PMRequiredRepor2',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDR0010PMRequiredRepor2.component.html'
})
export class CKDR0010PMRequiredRepor2 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDR0010PMRequiredRepor2";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "900px";
    private static readonly height: string = "650px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CKDR0010PMRequiredRepor2.x;
    }
    Y() {
        return CKDR0010PMRequiredRepor2.y;
    }
    Width(): string {
        return CKDR0010PMRequiredRepor2.width;
    }
    Height(): string {
        return CKDR0010PMRequiredRepor2.height;
    }
    IsCenteredToWindow() {
        return CKDR0010PMRequiredRepor2.isCenteredToWindow;
    }
    FormName() {
        return CKDR0010PMRequiredRepor2.formName;
    }
    ShowTitleBar() {
        return CKDR0010PMRequiredRepor2.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDR0010PMRequiredRepor2.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDR0010PMRequiredRepor2.isResizable;
    }
    IsMovable() {
        return CKDR0010PMRequiredRepor2.isMovable;
    }
}