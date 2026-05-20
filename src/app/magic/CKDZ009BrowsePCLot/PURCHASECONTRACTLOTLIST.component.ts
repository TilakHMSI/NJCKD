import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PURCHASECONTRACTLOTLIST.mg.controls.g";
import { MgDisplayedColumns } from "./PURCHASECONTRACTLOTLIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ009BrowsePCLot_PURCHASECONTRACTLOTLIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PURCHASECONTRACTLOTLIST.component.html'
})
export class PURCHASECONTRACTLOTLIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PURCHASECONTRACTLOTLIST";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "850px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PURCHASECONTRACTLOTLIST.x;
    }
    Y() {
        return PURCHASECONTRACTLOTLIST.y;
    }
    Width(): string {
        return PURCHASECONTRACTLOTLIST.width;
    }
    Height(): string {
        return PURCHASECONTRACTLOTLIST.height;
    }
    IsCenteredToWindow() {
        return PURCHASECONTRACTLOTLIST.isCenteredToWindow;
    }
    FormName() {
        return PURCHASECONTRACTLOTLIST.formName;
    }
    ShowTitleBar() {
        return PURCHASECONTRACTLOTLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PURCHASECONTRACTLOTLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PURCHASECONTRACTLOTLIST.isResizable;
    }
    IsMovable() {
        return PURCHASECONTRACTLOTLIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}