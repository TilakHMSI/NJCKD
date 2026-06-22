import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CaseCM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0020CaseMaster_CKDM0020CaseList_CaseCM_CaseCM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CaseCM.component.html'
})
export class CaseCM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CaseCM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "400px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CaseCM.x;
    }
    Y() {
        return CaseCM.y;
    }
    Width(): string {
        return CaseCM.width;
    }
    Height(): string {
        return CaseCM.height;
    }
    IsCenteredToWindow() {
        return CaseCM.isCenteredToWindow;
    }
    FormName() {
        return CaseCM.formName;
    }
    ShowTitleBar() {
        return CaseCM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CaseCM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CaseCM.isResizable;
    }
    IsMovable() {
        return CaseCM.isMovable;
    }
}