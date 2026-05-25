import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENGINELIST.mg.controls.g";
import { MgDisplayedColumns } from "./ENGINELIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ013DisplayEngineNos_ENGINELIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './ENGINELIST.component.html'
})
export class ENGINELIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ENGINELIST";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "520px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return ENGINELIST.x;
    }
    Y() {
        return ENGINELIST.y;
    }
    Width(): string {
        return ENGINELIST.width;
    }
    Height(): string {
        return ENGINELIST.height;
    }
    IsCenteredToWindow() {
        return ENGINELIST.isCenteredToWindow;
    }
    FormName() {
        return ENGINELIST.formName;
    }
    ShowTitleBar() {
        return ENGINELIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ENGINELIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ENGINELIST.isResizable;
    }
    IsMovable() {
        return ENGINELIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}