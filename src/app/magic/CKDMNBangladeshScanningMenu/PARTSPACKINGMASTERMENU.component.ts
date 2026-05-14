import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PARTSPACKINGMASTERMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDMNBangladeshScanningMenu_PARTSPACKINGMASTERMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PARTSPACKINGMASTERMENU.component.html'
})
export class PARTSPACKINGMASTERMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PARTSPACKINGMASTERMENU";
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
        return PARTSPACKINGMASTERMENU.x;
    }
    Y() {
        return PARTSPACKINGMASTERMENU.y;
    }
    Width(): string {
        return PARTSPACKINGMASTERMENU.width;
    }
    Height(): string {
        return PARTSPACKINGMASTERMENU.height;
    }
    IsCenteredToWindow() {
        return PARTSPACKINGMASTERMENU.isCenteredToWindow;
    }
    FormName() {
        return PARTSPACKINGMASTERMENU.formName;
    }
    ShowTitleBar() {
        return PARTSPACKINGMASTERMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PARTSPACKINGMASTERMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PARTSPACKINGMASTERMENU.isResizable;
    }
    IsMovable() {
        return PARTSPACKINGMASTERMENU.isMovable;
    }
}