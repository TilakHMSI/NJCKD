import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDDAILYREPORT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDR0050CKDDailyPackReport_CKDDAILYREPORT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDDAILYREPORT.component.html'
})
export class CKDDAILYREPORT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDDAILYREPORT";
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
        return CKDDAILYREPORT.x;
    }
    Y() {
        return CKDDAILYREPORT.y;
    }
    Width(): string {
        return CKDDAILYREPORT.width;
    }
    Height(): string {
        return CKDDAILYREPORT.height;
    }
    IsCenteredToWindow() {
        return CKDDAILYREPORT.isCenteredToWindow;
    }
    FormName() {
        return CKDDAILYREPORT.formName;
    }
    ShowTitleBar() {
        return CKDDAILYREPORT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDDAILYREPORT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDDAILYREPORT.isResizable;
    }
    IsMovable() {
        return CKDDAILYREPORT.isMovable;
    }
}