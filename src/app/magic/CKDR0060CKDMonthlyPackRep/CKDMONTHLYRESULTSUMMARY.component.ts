import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDMONTHLYRESULTSUMMARY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDR0060CKDMonthlyPackRep_CKDMONTHLYRESULTSUMMARY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDMONTHLYRESULTSUMMARY.component.html'
})
export class CKDMONTHLYRESULTSUMMARY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDMONTHLYRESULTSUMMARY";
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
        return CKDMONTHLYRESULTSUMMARY.x;
    }
    Y() {
        return CKDMONTHLYRESULTSUMMARY.y;
    }
    Width(): string {
        return CKDMONTHLYRESULTSUMMARY.width;
    }
    Height(): string {
        return CKDMONTHLYRESULTSUMMARY.height;
    }
    IsCenteredToWindow() {
        return CKDMONTHLYRESULTSUMMARY.isCenteredToWindow;
    }
    FormName() {
        return CKDMONTHLYRESULTSUMMARY.formName;
    }
    ShowTitleBar() {
        return CKDMONTHLYRESULTSUMMARY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDMONTHLYRESULTSUMMARY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDMONTHLYRESULTSUMMARY.isResizable;
    }
    IsMovable() {
        return CKDMONTHLYRESULTSUMMARY.isMovable;
    }
}