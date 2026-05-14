import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./HardwareChecklistPrint.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-HardwareChecklistPrint_HardwareChecklistPrint',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './HardwareChecklistPrint.component.html'
})
export class HardwareChecklistPrint extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "HardwareChecklistPrint";
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
        return HardwareChecklistPrint.x;
    }
    Y() {
        return HardwareChecklistPrint.y;
    }
    Width(): string {
        return HardwareChecklistPrint.width;
    }
    Height(): string {
        return HardwareChecklistPrint.height;
    }
    IsCenteredToWindow() {
        return HardwareChecklistPrint.isCenteredToWindow;
    }
    FormName() {
        return HardwareChecklistPrint.formName;
    }
    ShowTitleBar() {
        return HardwareChecklistPrint.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return HardwareChecklistPrint.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return HardwareChecklistPrint.isResizable;
    }
    IsMovable() {
        return HardwareChecklistPrint.isMovable;
    }
}