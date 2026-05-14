import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PARTSPACKINGMASTER.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPM020PartsPackingMaster_PARTSPACKINGMASTER',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PARTSPACKINGMASTER.component.html'
})
export class PARTSPACKINGMASTER extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PARTSPACKINGMASTER";
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
        return PARTSPACKINGMASTER.x;
    }
    Y() {
        return PARTSPACKINGMASTER.y;
    }
    Width(): string {
        return PARTSPACKINGMASTER.width;
    }
    Height(): string {
        return PARTSPACKINGMASTER.height;
    }
    IsCenteredToWindow() {
        return PARTSPACKINGMASTER.isCenteredToWindow;
    }
    FormName() {
        return PARTSPACKINGMASTER.formName;
    }
    ShowTitleBar() {
        return PARTSPACKINGMASTER.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PARTSPACKINGMASTER.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PARTSPACKINGMASTER.isResizable;
    }
    IsMovable() {
        return PARTSPACKINGMASTER.isMovable;
    }
}