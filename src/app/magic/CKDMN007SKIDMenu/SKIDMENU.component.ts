import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SKIDMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDMN007SKIDMenu_SKIDMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SKIDMENU.component.html'
})
export class SKIDMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SKIDMENU";
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
        return SKIDMENU.x;
    }
    Y() {
        return SKIDMENU.y;
    }
    Width(): string {
        return SKIDMENU.width;
    }
    Height(): string {
        return SKIDMENU.height;
    }
    IsCenteredToWindow() {
        return SKIDMENU.isCenteredToWindow;
    }
    FormName() {
        return SKIDMENU.formName;
    }
    ShowTitleBar() {
        return SKIDMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SKIDMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SKIDMENU.isResizable;
    }
    IsMovable() {
        return SKIDMENU.isMovable;
    }
}