import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FinishedCaseTransfertoHMSI.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDCaseTransferModule_MainLoop_StockTransferMain_FinishedCaseTransfertoHMSI',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FinishedCaseTransfertoHMSI.component.html'
})
export class FinishedCaseTransfertoHMSI extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FinishedCaseTransfertoHMSI";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return FinishedCaseTransfertoHMSI.x;
    }
    Y() {
        return FinishedCaseTransfertoHMSI.y;
    }
    Width(): string {
        return FinishedCaseTransfertoHMSI.width;
    }
    Height(): string {
        return FinishedCaseTransfertoHMSI.height;
    }
    IsCenteredToWindow() {
        return FinishedCaseTransfertoHMSI.isCenteredToWindow;
    }
    FormName() {
        return FinishedCaseTransfertoHMSI.formName;
    }
    ShowTitleBar() {
        return FinishedCaseTransfertoHMSI.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FinishedCaseTransfertoHMSI.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FinishedCaseTransfertoHMSI.isResizable;
    }
    IsMovable() {
        return FinishedCaseTransfertoHMSI.isMovable;
    }
}