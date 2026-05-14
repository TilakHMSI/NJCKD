import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CASELABELPRINT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0080CaseLabelPrint_CASELABELPRINT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CASELABELPRINT.component.html'
})
export class CASELABELPRINT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CASELABELPRINT";
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
        return CASELABELPRINT.x;
    }
    Y() {
        return CASELABELPRINT.y;
    }
    Width(): string {
        return CASELABELPRINT.width;
    }
    Height(): string {
        return CASELABELPRINT.height;
    }
    IsCenteredToWindow() {
        return CASELABELPRINT.isCenteredToWindow;
    }
    FormName() {
        return CASELABELPRINT.formName;
    }
    ShowTitleBar() {
        return CASELABELPRINT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CASELABELPRINT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CASELABELPRINT.isResizable;
    }
    IsMovable() {
        return CASELABELPRINT.isMovable;
    }
}