import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDPARTSMASTER_CM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPARTSMASTERView_CKDPARTSMASTERList_CKDPARTSMASTER_CM_CKDPARTSMASTER_CM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDPARTSMASTER_CM.component.html'
})
export class CKDPARTSMASTER_CM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDPARTSMASTER_CM";
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
        return CKDPARTSMASTER_CM.x;
    }
    Y() {
        return CKDPARTSMASTER_CM.y;
    }
    Width(): string {
        return CKDPARTSMASTER_CM.width;
    }
    Height(): string {
        return CKDPARTSMASTER_CM.height;
    }
    IsCenteredToWindow() {
        return CKDPARTSMASTER_CM.isCenteredToWindow;
    }
    FormName() {
        return CKDPARTSMASTER_CM.formName;
    }
    ShowTitleBar() {
        return CKDPARTSMASTER_CM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDPARTSMASTER_CM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDPARTSMASTER_CM.isResizable;
    }
    IsMovable() {
        return CKDPARTSMASTER_CM.isMovable;
    }
}