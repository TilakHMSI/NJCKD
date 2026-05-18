import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLOURCODEMASTER.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-COLOURCODEMASTER_COLOURCODEMASTER',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './COLOURCODEMASTER.component.html'
})
export class COLOURCODEMASTER extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLOURCODEMASTER";
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
        return COLOURCODEMASTER.x;
    }
    Y() {
        return COLOURCODEMASTER.y;
    }
    Width(): string {
        return COLOURCODEMASTER.width;
    }
    Height(): string {
        return COLOURCODEMASTER.height;
    }
    IsCenteredToWindow() {
        return COLOURCODEMASTER.isCenteredToWindow;
    }
    FormName() {
        return COLOURCODEMASTER.formName;
    }
    ShowTitleBar() {
        return COLOURCODEMASTER.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLOURCODEMASTER.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLOURCODEMASTER.isResizable;
    }
    IsMovable() {
        return COLOURCODEMASTER.isMovable;
    }
}