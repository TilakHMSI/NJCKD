import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PACKINGPLANMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDMN104PackPlanPrintMenu_PACKINGPLANMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PACKINGPLANMENU.component.html'
})
export class PACKINGPLANMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PACKINGPLANMENU";
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
        return PACKINGPLANMENU.x;
    }
    Y() {
        return PACKINGPLANMENU.y;
    }
    Width(): string {
        return PACKINGPLANMENU.width;
    }
    Height(): string {
        return PACKINGPLANMENU.height;
    }
    IsCenteredToWindow() {
        return PACKINGPLANMENU.isCenteredToWindow;
    }
    FormName() {
        return PACKINGPLANMENU.formName;
    }
    ShowTitleBar() {
        return PACKINGPLANMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PACKINGPLANMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PACKINGPLANMENU.isResizable;
    }
    IsMovable() {
        return PACKINGPLANMENU.isMovable;
    }
}