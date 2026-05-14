import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./StatusMessage.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDCaseTransferModule_MainLoop_StockTransferMain_StatusMessage_StatusMessage',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './StatusMessage.component.html'
})
export class StatusMessage extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "StatusMessage";
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
        return StatusMessage.x;
    }
    Y() {
        return StatusMessage.y;
    }
    Width(): string {
        return StatusMessage.width;
    }
    Height(): string {
        return StatusMessage.height;
    }
    IsCenteredToWindow() {
        return StatusMessage.isCenteredToWindow;
    }
    FormName() {
        return StatusMessage.formName;
    }
    ShowTitleBar() {
        return StatusMessage.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return StatusMessage.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return StatusMessage.isResizable;
    }
    IsMovable() {
        return StatusMessage.isMovable;
    }
}