import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAMEDETAILS.mg.controls.g";
import { MgDisplayedColumns } from "./FRAMEDETAILS.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0090CartonCaseScanning_FrameDetail_FRAMEDETAILS',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './FRAMEDETAILS.component.html'
})
export class FRAMEDETAILS extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FRAMEDETAILS";
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
        return FRAMEDETAILS.x;
    }
    Y() {
        return FRAMEDETAILS.y;
    }
    Width(): string {
        return FRAMEDETAILS.width;
    }
    Height(): string {
        return FRAMEDETAILS.height;
    }
    IsCenteredToWindow() {
        return FRAMEDETAILS.isCenteredToWindow;
    }
    FormName() {
        return FRAMEDETAILS.formName;
    }
    ShowTitleBar() {
        return FRAMEDETAILS.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FRAMEDETAILS.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FRAMEDETAILS.isResizable;
    }
    IsMovable() {
        return FRAMEDETAILS.isMovable;
    }
    override displayedColumns = this.mgdp;
}