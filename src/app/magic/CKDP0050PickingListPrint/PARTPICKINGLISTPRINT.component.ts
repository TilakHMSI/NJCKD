import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PARTPICKINGLISTPRINT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0050PickingListPrint_PARTPICKINGLISTPRINT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PARTPICKINGLISTPRINT.component.html'
})
export class PARTPICKINGLISTPRINT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PARTPICKINGLISTPRINT";
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
        return PARTPICKINGLISTPRINT.x;
    }
    Y() {
        return PARTPICKINGLISTPRINT.y;
    }
    Width(): string {
        return PARTPICKINGLISTPRINT.width;
    }
    Height(): string {
        return PARTPICKINGLISTPRINT.height;
    }
    IsCenteredToWindow() {
        return PARTPICKINGLISTPRINT.isCenteredToWindow;
    }
    FormName() {
        return PARTPICKINGLISTPRINT.formName;
    }
    ShowTitleBar() {
        return PARTPICKINGLISTPRINT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PARTPICKINGLISTPRINT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PARTPICKINGLISTPRINT.isResizable;
    }
    IsMovable() {
        return PARTPICKINGLISTPRINT.isMovable;
    }
}