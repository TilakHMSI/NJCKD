import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDMAINMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDMN100MainMenu_CKDMAINMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDMAINMENU.component.html'
})
export class CKDMAINMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDMAINMENU";
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
        return CKDMAINMENU.x;
    }
    Y() {
        return CKDMAINMENU.y;
    }
    Width(): string {
        return CKDMAINMENU.width;
    }
    Height(): string {
        return CKDMAINMENU.height;
    }
    IsCenteredToWindow() {
        return CKDMAINMENU.isCenteredToWindow;
    }
    FormName() {
        return CKDMAINMENU.formName;
    }
    ShowTitleBar() {
        return CKDMAINMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDMAINMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDMAINMENU.isResizable;
    }
    IsMovable() {
        return CKDMAINMENU.isMovable;
    }
}