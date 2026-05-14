import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PartsMappingMaintList.mg.controls.g";
import { MgDisplayedColumns } from "./PartsMappingMaintList.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPartsMappingMaintenance_PartsMappingMaintList_PartsMappingMaintList',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PartsMappingMaintList.component.html'
})
export class PartsMappingMaintList extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PartsMappingMaintList";
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
        return PartsMappingMaintList.x;
    }
    Y() {
        return PartsMappingMaintList.y;
    }
    Width(): string {
        return PartsMappingMaintList.width;
    }
    Height(): string {
        return PartsMappingMaintList.height;
    }
    IsCenteredToWindow() {
        return PartsMappingMaintList.isCenteredToWindow;
    }
    FormName() {
        return PartsMappingMaintList.formName;
    }
    ShowTitleBar() {
        return PartsMappingMaintList.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PartsMappingMaintList.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PartsMappingMaintList.isResizable;
    }
    IsMovable() {
        return PartsMappingMaintList.isMovable;
    }
    override displayedColumns = this.mgdp;
}