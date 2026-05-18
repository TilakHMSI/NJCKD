import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDM0030PackingMaster.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0030PackingMatMaster_CKDM0030PackingMaster',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDM0030PackingMaster.component.html'
})
export class CKDM0030PackingMaster extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDM0030PackingMaster";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1220px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CKDM0030PackingMaster.x;
    }
    Y() {
        return CKDM0030PackingMaster.y;
    }
    Width(): string {
        return CKDM0030PackingMaster.width;
    }
    Height(): string {
        return CKDM0030PackingMaster.height;
    }
    IsCenteredToWindow() {
        return CKDM0030PackingMaster.isCenteredToWindow;
    }
    FormName() {
        return CKDM0030PackingMaster.formName;
    }
    ShowTitleBar() {
        return CKDM0030PackingMaster.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDM0030PackingMaster.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDM0030PackingMaster.isResizable;
    }
    IsMovable() {
        return CKDM0030PackingMaster.isMovable;
    }
}