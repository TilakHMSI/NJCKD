import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LABELPRINTMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDMN105CartonCaseLabelMnu_LABELPRINTMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './LABELPRINTMENU.component.html'
})
export class LABELPRINTMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LABELPRINTMENU";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1200px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return LABELPRINTMENU.x;
    }
    Y() {
        return LABELPRINTMENU.y;
    }
    Width(): string {
        return LABELPRINTMENU.width;
    }
    Height(): string {
        return LABELPRINTMENU.height;
    }
    IsCenteredToWindow() {
        return LABELPRINTMENU.isCenteredToWindow;
    }
    FormName() {
        return LABELPRINTMENU.formName;
    }
    ShowTitleBar() {
        return LABELPRINTMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LABELPRINTMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LABELPRINTMENU.isResizable;
    }
    IsMovable() {
        return LABELPRINTMENU.isMovable;
    }
}