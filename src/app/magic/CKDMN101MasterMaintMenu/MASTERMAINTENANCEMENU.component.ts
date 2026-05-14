import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MASTERMAINTENANCEMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDMN101MasterMaintMenu_MASTERMAINTENANCEMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './MASTERMAINTENANCEMENU.component.html'
})
export class MASTERMAINTENANCEMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MASTERMAINTENANCEMENU";
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
        return MASTERMAINTENANCEMENU.x;
    }
    Y() {
        return MASTERMAINTENANCEMENU.y;
    }
    Width(): string {
        return MASTERMAINTENANCEMENU.width;
    }
    Height(): string {
        return MASTERMAINTENANCEMENU.height;
    }
    IsCenteredToWindow() {
        return MASTERMAINTENANCEMENU.isCenteredToWindow;
    }
    FormName() {
        return MASTERMAINTENANCEMENU.formName;
    }
    ShowTitleBar() {
        return MASTERMAINTENANCEMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MASTERMAINTENANCEMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MASTERMAINTENANCEMENU.isResizable;
    }
    IsMovable() {
        return MASTERMAINTENANCEMENU.isMovable;
    }
}