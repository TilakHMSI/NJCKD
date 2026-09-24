import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Detail.mg.controls.g";
import { MgDisplayedColumns } from "./Detail.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0090CartonCaseScanning_FrameDetail_Detail_Detail',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './Detail.component.html'
})
export class Detail extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Detail";
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
        return Detail.x;
    }
    Y() {
        return Detail.y;
    }
    Width(): string {
        return Detail.width;
    }
    Height(): string {
        return Detail.height;
    }
    IsCenteredToWindow() {
        return Detail.isCenteredToWindow;
    }
    FormName() {
        return Detail.formName;
    }
    ShowTitleBar() {
        return Detail.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Detail.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return Detail.isResizable;
    }
    IsMovable() {
        return Detail.isMovable;
    }
    override displayedColumns = this.mgdp;
}