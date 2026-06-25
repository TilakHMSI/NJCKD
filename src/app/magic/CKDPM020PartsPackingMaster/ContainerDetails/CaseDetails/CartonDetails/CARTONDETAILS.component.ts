import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CARTONDETAILS.mg.controls.g";
import { MgDisplayedColumns } from "./CARTONDETAILS.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPM020PartsPackingMaster_ContainerDetails_CaseDetails_CartonDetails_CARTONDETAILS',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./CARTONDETAILS.component.css'],
    templateUrl: './CARTONDETAILS.component.html'
})
export class CARTONDETAILS extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CARTONDETAILS";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "850px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return CARTONDETAILS.x;
    }
    Y() {
        return CARTONDETAILS.y;
    }
    Width(): string {
        return CARTONDETAILS.width;
    }
    Height(): string {
        return CARTONDETAILS.height;
    }
    IsCenteredToWindow() {
        return CARTONDETAILS.isCenteredToWindow;
    }
    FormName() {
        return CARTONDETAILS.formName;
    }
    ShowTitleBar() {
        return CARTONDETAILS.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CARTONDETAILS.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CARTONDETAILS.isResizable;
    }
    IsMovable() {
        return CARTONDETAILS.isMovable;
    }
    override displayedColumns = this.mgdp;
}