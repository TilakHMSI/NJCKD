import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectOlddistinctParts.mg.controls.g";
import { MgDisplayedColumns } from "./SelectOlddistinctParts.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-UpdateLotDCNUpdation_SelectOlddistinctParts_SelectOlddistinctParts',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './SelectOlddistinctParts.component.html'
})
export class SelectOlddistinctParts extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SelectOlddistinctParts";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "450px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return SelectOlddistinctParts.x;
    }
    Y() {
        return SelectOlddistinctParts.y;
    }
    Width(): string {
        return SelectOlddistinctParts.width;
    }
    Height(): string {
        return SelectOlddistinctParts.height;
    }
    IsCenteredToWindow() {
        return SelectOlddistinctParts.isCenteredToWindow;
    }
    FormName() {
        return SelectOlddistinctParts.formName;
    }
    ShowTitleBar() {
        return SelectOlddistinctParts.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SelectOlddistinctParts.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SelectOlddistinctParts.isResizable;
    }
    IsMovable() {
        return SelectOlddistinctParts.isMovable;
    }
    override displayedColumns = this.mgdp;
}