import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LOTGENERATIONFORPURCHASECO.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0010LotNoCreate_LOTGENERATIONFORPURCHASECO',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './LOTGENERATIONFORPURCHASECO.component.html'
})
export class LOTGENERATIONFORPURCHASECO extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LOTGENERATIONFORPURCHASECO";
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
        return LOTGENERATIONFORPURCHASECO.x;
    }
    Y() {
        return LOTGENERATIONFORPURCHASECO.y;
    }
    Width(): string {
        return LOTGENERATIONFORPURCHASECO.width;
    }
    Height(): string {
        return LOTGENERATIONFORPURCHASECO.height;
    }
    IsCenteredToWindow() {
        return LOTGENERATIONFORPURCHASECO.isCenteredToWindow;
    }
    FormName() {
        return LOTGENERATIONFORPURCHASECO.formName;
    }
    ShowTitleBar() {
        return LOTGENERATIONFORPURCHASECO.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LOTGENERATIONFORPURCHASECO.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LOTGENERATIONFORPURCHASECO.isResizable;
    }
    IsMovable() {
        return LOTGENERATIONFORPURCHASECO.isMovable;
    }
}