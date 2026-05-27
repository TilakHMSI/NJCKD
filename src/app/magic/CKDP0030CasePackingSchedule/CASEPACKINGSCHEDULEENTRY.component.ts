import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CASEPACKINGSCHEDULEENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0030CasePackingSchedule_CASEPACKINGSCHEDULEENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CASEPACKINGSCHEDULEENTRY.component.html'
})
export class CASEPACKINGSCHEDULEENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CASEPACKINGSCHEDULEENTRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1200px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CASEPACKINGSCHEDULEENTRY.x;
    }
    Y() {
        return CASEPACKINGSCHEDULEENTRY.y;
    }
    Width(): string {
        return CASEPACKINGSCHEDULEENTRY.width;
    }
    Height(): string {
        return CASEPACKINGSCHEDULEENTRY.height;
    }
    IsCenteredToWindow() {
        return CASEPACKINGSCHEDULEENTRY.isCenteredToWindow;
    }
    FormName() {
        return CASEPACKINGSCHEDULEENTRY.formName;
    }
    ShowTitleBar() {
        return CASEPACKINGSCHEDULEENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CASEPACKINGSCHEDULEENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CASEPACKINGSCHEDULEENTRY.isResizable;
    }
    IsMovable() {
        return CASEPACKINGSCHEDULEENTRY.isMovable;
    }
}