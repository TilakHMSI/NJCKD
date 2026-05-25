import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CASEPACKINGSCHEDULEAPPROVAL.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0040CasePackingApproval_CASEPACKINGSCHEDULEAPPROVAL',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CASEPACKINGSCHEDULEAPPROVAL.component.html'
})
export class CASEPACKINGSCHEDULEAPPROVAL extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CASEPACKINGSCHEDULEAPPROVAL";
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
        return CASEPACKINGSCHEDULEAPPROVAL.x;
    }
    Y() {
        return CASEPACKINGSCHEDULEAPPROVAL.y;
    }
    Width(): string {
        return CASEPACKINGSCHEDULEAPPROVAL.width;
    }
    Height(): string {
        return CASEPACKINGSCHEDULEAPPROVAL.height;
    }
    IsCenteredToWindow() {
        return CASEPACKINGSCHEDULEAPPROVAL.isCenteredToWindow;
    }
    FormName() {
        return CASEPACKINGSCHEDULEAPPROVAL.formName;
    }
    ShowTitleBar() {
        return CASEPACKINGSCHEDULEAPPROVAL.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CASEPACKINGSCHEDULEAPPROVAL.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CASEPACKINGSCHEDULEAPPROVAL.isResizable;
    }
    IsMovable() {
        return CASEPACKINGSCHEDULEAPPROVAL.isMovable;
    }
}