import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Inputcolor.mg.controls.g";
import { MgDisplayedColumns } from "./Inputcolor.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0020LotNoPackingData_Inputcolor_Inputcolor',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './Inputcolor.component.html'
})
export class Inputcolor extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Inputcolor";
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
        return Inputcolor.x;
    }
    Y() {
        return Inputcolor.y;
    }
    Width(): string {
        return Inputcolor.width;
    }
    Height(): string {
        return Inputcolor.height;
    }
    IsCenteredToWindow() {
        return Inputcolor.isCenteredToWindow;
    }
    FormName() {
        return Inputcolor.formName;
    }
    ShowTitleBar() {
        return Inputcolor.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Inputcolor.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return Inputcolor.isResizable;
    }
    IsMovable() {
        return Inputcolor.isMovable;
    }
    override displayedColumns = this.mgdp;
}