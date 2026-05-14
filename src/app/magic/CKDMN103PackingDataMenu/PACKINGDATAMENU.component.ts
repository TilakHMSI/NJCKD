import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PACKINGDATAMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDMN103PackingDataMenu_PACKINGDATAMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PACKINGDATAMENU.component.html'
})
export class PACKINGDATAMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PACKINGDATAMENU";
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
        return PACKINGDATAMENU.x;
    }
    Y() {
        return PACKINGDATAMENU.y;
    }
    Width(): string {
        return PACKINGDATAMENU.width;
    }
    Height(): string {
        return PACKINGDATAMENU.height;
    }
    IsCenteredToWindow() {
        return PACKINGDATAMENU.isCenteredToWindow;
    }
    FormName() {
        return PACKINGDATAMENU.formName;
    }
    ShowTitleBar() {
        return PACKINGDATAMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PACKINGDATAMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PACKINGDATAMENU.isResizable;
    }
    IsMovable() {
        return PACKINGDATAMENU.isMovable;
    }
}