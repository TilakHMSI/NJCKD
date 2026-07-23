import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CASEPACKINGPLANPRINT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0110CasePackingPlan_CASEPACKINGPLANPRINT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CASEPACKINGPLANPRINT.component.html',
    
})
export class CASEPACKINGPLANPRINT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CASEPACKINGPLANPRINT";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1100px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CASEPACKINGPLANPRINT.x;
    }
    Y() {
        return CASEPACKINGPLANPRINT.y;
    }
    Width(): string {
        return CASEPACKINGPLANPRINT.width;
    }
    Height(): string {
        return CASEPACKINGPLANPRINT.height;
    }
    IsCenteredToWindow() {
        return CASEPACKINGPLANPRINT.isCenteredToWindow;
    }
    FormName() {
        return CASEPACKINGPLANPRINT.formName;
    }
    ShowTitleBar() {
        return CASEPACKINGPLANPRINT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CASEPACKINGPLANPRINT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CASEPACKINGPLANPRINT.isResizable;
    }
    IsMovable() {
        return CASEPACKINGPLANPRINT.isMovable;
    }
}