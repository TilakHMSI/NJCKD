import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDZ012List.mg.controls.g";
import { MgDisplayedColumns } from "./CKDZ012List.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ012BrowseCartons_CKDZ012List_CKDZ012List',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './CKDZ012List.component.html'
})
export class CKDZ012List extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDZ012List";
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
        return CKDZ012List.x;
    }
    Y() {
        return CKDZ012List.y;
    }
    Width(): string {
        return CKDZ012List.width;
    }
    Height(): string {
        return CKDZ012List.height;
    }
    IsCenteredToWindow() {
        return CKDZ012List.isCenteredToWindow;
    }
    FormName() {
        return CKDZ012List.formName;
    }
    ShowTitleBar() {
        return CKDZ012List.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDZ012List.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDZ012List.isResizable;
    }
    IsMovable() {
        return CKDZ012List.isMovable;
    }
    override displayedColumns = this.mgdp;
}