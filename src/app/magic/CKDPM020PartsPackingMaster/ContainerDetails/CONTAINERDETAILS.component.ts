import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CONTAINERDETAILS.mg.controls.g";
import { MgDisplayedColumns } from "./CONTAINERDETAILS.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPM020PartsPackingMaster_ContainerDetails_CONTAINERDETAILS',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './CONTAINERDETAILS.component.html'
})
export class CONTAINERDETAILS extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CONTAINERDETAILS";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return CONTAINERDETAILS.x;
    }
    Y() {
        return CONTAINERDETAILS.y;
    }
    Width(): string {
        return CONTAINERDETAILS.width;
    }
    Height(): string {
        return CONTAINERDETAILS.height;
    }
    IsCenteredToWindow() {
        return CONTAINERDETAILS.isCenteredToWindow;
    }
    FormName() {
        return CONTAINERDETAILS.formName;
    }
    ShowTitleBar() {
        return CONTAINERDETAILS.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CONTAINERDETAILS.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CONTAINERDETAILS.isResizable;
    }
    IsMovable() {
        return CONTAINERDETAILS.isMovable;
    }
    override displayedColumns = this.mgdp;
}