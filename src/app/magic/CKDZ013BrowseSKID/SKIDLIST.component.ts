import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SKIDLIST.mg.controls.g";
import { MgDisplayedColumns } from "./SKIDLIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ013BrowseSKID_SKIDLIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './SKIDLIST.component.html'
})
export class SKIDLIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SKIDLIST";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return SKIDLIST.x;
    }
    Y() {
        return SKIDLIST.y;
    }
    Width(): string {
        return SKIDLIST.width;
    }
    Height(): string {
        return SKIDLIST.height;
    }
    IsCenteredToWindow() {
        return SKIDLIST.isCenteredToWindow;
    }
    FormName() {
        return SKIDLIST.formName;
    }
    ShowTitleBar() {
        return SKIDLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SKIDLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SKIDLIST.isResizable;
    }
    IsMovable() {
        return SKIDLIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}