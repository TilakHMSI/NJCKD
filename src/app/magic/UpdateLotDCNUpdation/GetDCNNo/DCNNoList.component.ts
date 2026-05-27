import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DCNNoList.mg.controls.g";
import { MgDisplayedColumns } from "./DCNNoList.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-UpdateLotDCNUpdation_GetDCNNo_DCNNoList',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './DCNNoList.component.html'
})
export class DCNNoList extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DCNNoList";
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
        return DCNNoList.x;
    }
    Y() {
        return DCNNoList.y;
    }
    Width(): string {
        return DCNNoList.width;
    }
    Height(): string {
        return DCNNoList.height;
    }
    IsCenteredToWindow() {
        return DCNNoList.isCenteredToWindow;
    }
    FormName() {
        return DCNNoList.formName;
    }
    ShowTitleBar() {
        return DCNNoList.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DCNNoList.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DCNNoList.isResizable;
    }
    IsMovable() {
        return DCNNoList.isMovable;
    }
    override displayedColumns = this.mgdp;
}