import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PartNoList.mg.controls.g";
import { MgDisplayedColumns } from "./PartNoList.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ007BrowseBomParts_BomPartsList_PartNoList',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PartNoList.component.html'
})
export class PartNoList extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PartNoList";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "700px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PartNoList.x;
    }
    Y() {
        return PartNoList.y;
    }
    Width(): string {
        return PartNoList.width;
    }
    Height(): string {
        return PartNoList.height;
    }
    IsCenteredToWindow() {
        return PartNoList.isCenteredToWindow;
    }
    FormName() {
        return PartNoList.formName;
    }
    ShowTitleBar() {
        return PartNoList.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PartNoList.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PartNoList.isResizable;
    }
    IsMovable() {
        return PartNoList.isMovable;
    }
    override displayedColumns = this.mgdp;
}