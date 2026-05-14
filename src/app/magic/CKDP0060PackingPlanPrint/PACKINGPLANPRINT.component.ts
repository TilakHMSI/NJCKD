import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PACKINGPLANPRINT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0060PackingPlanPrint_PACKINGPLANPRINT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PACKINGPLANPRINT.component.html'
})
export class PACKINGPLANPRINT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PACKINGPLANPRINT";
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
        return PACKINGPLANPRINT.x;
    }
    Y() {
        return PACKINGPLANPRINT.y;
    }
    Width(): string {
        return PACKINGPLANPRINT.width;
    }
    Height(): string {
        return PACKINGPLANPRINT.height;
    }
    IsCenteredToWindow() {
        return PACKINGPLANPRINT.isCenteredToWindow;
    }
    FormName() {
        return PACKINGPLANPRINT.formName;
    }
    ShowTitleBar() {
        return PACKINGPLANPRINT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PACKINGPLANPRINT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PACKINGPLANPRINT.isResizable;
    }
    IsMovable() {
        return PACKINGPLANPRINT.isMovable;
    }
}