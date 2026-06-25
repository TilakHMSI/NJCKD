import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PARTSDETAILS.mg.controls.g";
import { MgDisplayedColumns } from "./PARTSDETAILS.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPM020PartsPackingMaster_ContainerDetails_CaseDetails_CartonDetails_PartDetails_PARTSDETAILS',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PARTSDETAILS.component.html'
})
export class PARTSDETAILS extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PARTSDETAILS";
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
        return PARTSDETAILS.x;
    }
    Y() {
        return PARTSDETAILS.y;
    }
    Width(): string {
        return PARTSDETAILS.width;
    }
    Height(): string {
        return PARTSDETAILS.height;
    }
    IsCenteredToWindow() {
        return PARTSDETAILS.isCenteredToWindow;
    }
    FormName() {
        return PARTSDETAILS.formName;
    }
    ShowTitleBar() {
        return PARTSDETAILS.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PARTSDETAILS.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PARTSDETAILS.isResizable;
    }
    IsMovable() {
        return PARTSDETAILS.isMovable;
    }
    override displayedColumns = this.mgdp;
}