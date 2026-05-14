import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CARTONWISEPARTLIST.mg.controls.g";
import { MgDisplayedColumns } from "./CARTONWISEPARTLIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ013DisplayParts_CARTONWISEPARTLIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './CARTONWISEPARTLIST.component.html'
})
export class CARTONWISEPARTLIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CARTONWISEPARTLIST";
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
        return CARTONWISEPARTLIST.x;
    }
    Y() {
        return CARTONWISEPARTLIST.y;
    }
    Width(): string {
        return CARTONWISEPARTLIST.width;
    }
    Height(): string {
        return CARTONWISEPARTLIST.height;
    }
    IsCenteredToWindow() {
        return CARTONWISEPARTLIST.isCenteredToWindow;
    }
    FormName() {
        return CARTONWISEPARTLIST.formName;
    }
    ShowTitleBar() {
        return CARTONWISEPARTLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CARTONWISEPARTLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CARTONWISEPARTLIST.isResizable;
    }
    IsMovable() {
        return CARTONWISEPARTLIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}