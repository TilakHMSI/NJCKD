import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PACKINGCOMPLETIONMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDMN106CartonCaseScanMenu_PACKINGCOMPLETIONMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PACKINGCOMPLETIONMENU.component.html'
})
export class PACKINGCOMPLETIONMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PACKINGCOMPLETIONMENU";
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
        return PACKINGCOMPLETIONMENU.x;
    }
    Y() {
        return PACKINGCOMPLETIONMENU.y;
    }
    Width(): string {
        return PACKINGCOMPLETIONMENU.width;
    }
    Height(): string {
        return PACKINGCOMPLETIONMENU.height;
    }
    IsCenteredToWindow() {
        return PACKINGCOMPLETIONMENU.isCenteredToWindow;
    }
    FormName() {
        return PACKINGCOMPLETIONMENU.formName;
    }
    ShowTitleBar() {
        return PACKINGCOMPLETIONMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PACKINGCOMPLETIONMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PACKINGCOMPLETIONMENU.isResizable;
    }
    IsMovable() {
        return PACKINGCOMPLETIONMENU.isMovable;
    }
}