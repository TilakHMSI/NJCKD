import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LOTCONTAINERLIST.mg.controls.g";
import { MgDisplayedColumns } from "./LOTCONTAINERLIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ010BrowseContainer_LOTCONTAINERLIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './LOTCONTAINERLIST.component.html'
})
export class LOTCONTAINERLIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LOTCONTAINERLIST";
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
        return LOTCONTAINERLIST.x;
    }
    Y() {
        return LOTCONTAINERLIST.y;
    }
    Width(): string {
        return LOTCONTAINERLIST.width;
    }
    Height(): string {
        return LOTCONTAINERLIST.height;
    }
    IsCenteredToWindow() {
        return LOTCONTAINERLIST.isCenteredToWindow;
    }
    FormName() {
        return LOTCONTAINERLIST.formName;
    }
    ShowTitleBar() {
        return LOTCONTAINERLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LOTCONTAINERLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LOTCONTAINERLIST.isResizable;
    }
    IsMovable() {
        return LOTCONTAINERLIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}