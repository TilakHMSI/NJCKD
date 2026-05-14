import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PURCHASECONTRACTLIST.mg.controls.g";
import { MgDisplayedColumns } from "./PURCHASECONTRACTLIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ008BrowsePCList_PURCHASECONTRACTLIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PURCHASECONTRACTLIST.component.html'
})
export class PURCHASECONTRACTLIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PURCHASECONTRACTLIST";
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
        return PURCHASECONTRACTLIST.x;
    }
    Y() {
        return PURCHASECONTRACTLIST.y;
    }
    Width(): string {
        return PURCHASECONTRACTLIST.width;
    }
    Height(): string {
        return PURCHASECONTRACTLIST.height;
    }
    IsCenteredToWindow() {
        return PURCHASECONTRACTLIST.isCenteredToWindow;
    }
    FormName() {
        return PURCHASECONTRACTLIST.formName;
    }
    ShowTitleBar() {
        return PURCHASECONTRACTLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PURCHASECONTRACTLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PURCHASECONTRACTLIST.isResizable;
    }
    IsMovable() {
        return PURCHASECONTRACTLIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}