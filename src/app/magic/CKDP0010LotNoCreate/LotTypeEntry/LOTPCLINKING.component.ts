import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LOTPCLINKING.mg.controls.g";
import { MgDisplayedColumns } from "./LOTPCLINKING.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0010LotNoCreate_LotTypeEntry_LOTPCLINKING',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './LOTPCLINKING.component.html'
})
export class LOTPCLINKING extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LOTPCLINKING";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1100px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return LOTPCLINKING.x;
    }
    Y() {
        return LOTPCLINKING.y;
    }
    Width(): string {
        return LOTPCLINKING.width;
    }
    Height(): string {
        return LOTPCLINKING.height;
    }
    IsCenteredToWindow() {
        return LOTPCLINKING.isCenteredToWindow;
    }
    FormName() {
        return LOTPCLINKING.formName;
    }
    ShowTitleBar() {
        return LOTPCLINKING.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LOTPCLINKING.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LOTPCLINKING.isResizable;
    }
    IsMovable() {
        return LOTPCLINKING.isMovable;
    }
    override displayedColumns = this.mgdp;
}