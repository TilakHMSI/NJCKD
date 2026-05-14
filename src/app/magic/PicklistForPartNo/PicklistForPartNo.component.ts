import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PicklistForPartNo.mg.controls.g";
import { MgDisplayedColumns } from "./PicklistForPartNo.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PicklistForPartNo_PicklistForPartNo',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PicklistForPartNo.component.html'
})
export class PicklistForPartNo extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PicklistForPartNo";
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
        return PicklistForPartNo.x;
    }
    Y() {
        return PicklistForPartNo.y;
    }
    Width(): string {
        return PicklistForPartNo.width;
    }
    Height(): string {
        return PicklistForPartNo.height;
    }
    IsCenteredToWindow() {
        return PicklistForPartNo.isCenteredToWindow;
    }
    FormName() {
        return PicklistForPartNo.formName;
    }
    ShowTitleBar() {
        return PicklistForPartNo.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PicklistForPartNo.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PicklistForPartNo.isResizable;
    }
    IsMovable() {
        return PicklistForPartNo.isMovable;
    }
    override displayedColumns = this.mgdp;
}