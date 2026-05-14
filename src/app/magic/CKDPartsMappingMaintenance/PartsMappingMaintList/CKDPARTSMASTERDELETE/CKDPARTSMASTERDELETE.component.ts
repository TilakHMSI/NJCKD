import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDPARTSMASTERDELETE.mg.controls.g";
import { MgDisplayedColumns } from "./CKDPARTSMASTERDELETE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPartsMappingMaintenance_PartsMappingMaintList_CKDPARTSMASTERDELETE_CKDPARTSMASTERDELETE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './CKDPARTSMASTERDELETE.component.html'
})
export class CKDPARTSMASTERDELETE extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDPARTSMASTERDELETE";
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
        return CKDPARTSMASTERDELETE.x;
    }
    Y() {
        return CKDPARTSMASTERDELETE.y;
    }
    Width(): string {
        return CKDPARTSMASTERDELETE.width;
    }
    Height(): string {
        return CKDPARTSMASTERDELETE.height;
    }
    IsCenteredToWindow() {
        return CKDPARTSMASTERDELETE.isCenteredToWindow;
    }
    FormName() {
        return CKDPARTSMASTERDELETE.formName;
    }
    ShowTitleBar() {
        return CKDPARTSMASTERDELETE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDPARTSMASTERDELETE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDPARTSMASTERDELETE.isResizable;
    }
    IsMovable() {
        return CKDPARTSMASTERDELETE.isMovable;
    }
    override displayedColumns = this.mgdp;
}