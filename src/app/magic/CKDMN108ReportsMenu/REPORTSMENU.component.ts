import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./REPORTSMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDMN108ReportsMenu_REPORTSMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './REPORTSMENU.component.html'
})
export class REPORTSMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "REPORTSMENU";
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
        return REPORTSMENU.x;
    }
    Y() {
        return REPORTSMENU.y;
    }
    Width(): string {
        return REPORTSMENU.width;
    }
    Height(): string {
        return REPORTSMENU.height;
    }
    IsCenteredToWindow() {
        return REPORTSMENU.isCenteredToWindow;
    }
    FormName() {
        return REPORTSMENU.formName;
    }
    ShowTitleBar() {
        return REPORTSMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return REPORTSMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return REPORTSMENU.isResizable;
    }
    IsMovable() {
        return REPORTSMENU.isMovable;
    }
}