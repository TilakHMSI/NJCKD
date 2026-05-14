import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LOTMASTERLIST.mg.controls.g";
import { MgDisplayedColumns } from "./LOTMASTERLIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ001BrowseLotMaster_List_LOTMASTERLIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './LOTMASTERLIST.component.html'
})
export class LOTMASTERLIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LOTMASTERLIST";
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
        return LOTMASTERLIST.x;
    }
    Y() {
        return LOTMASTERLIST.y;
    }
    Width(): string {
        return LOTMASTERLIST.width;
    }
    Height(): string {
        return LOTMASTERLIST.height;
    }
    IsCenteredToWindow() {
        return LOTMASTERLIST.isCenteredToWindow;
    }
    FormName() {
        return LOTMASTERLIST.formName;
    }
    ShowTitleBar() {
        return LOTMASTERLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LOTMASTERLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LOTMASTERLIST.isResizable;
    }
    IsMovable() {
        return LOTMASTERLIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}