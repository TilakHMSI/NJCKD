import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LotMasterList.mg.controls.g";
import { MgDisplayedColumns } from "./LotMasterList.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ001BrowseLotMaster_List_LotMasterList',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./List.component.css'],
    templateUrl: './LotMasterList.component.html'
})
export class LotMasterList extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LotMasterList";
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
        return LotMasterList.x;
    }
    Y() {
        return LotMasterList.y;
    }
    Width(): string {
        return LotMasterList.width;
    }
    Height(): string {
        return LotMasterList.height;
    }
    IsCenteredToWindow() {
        return LotMasterList.isCenteredToWindow;
    }
    FormName() {
        return LotMasterList.formName;
    }
    ShowTitleBar() {
        return LotMasterList.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LotMasterList.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LotMasterList.isResizable;
    }
    IsMovable() {
        return LotMasterList.isMovable;
    }
    override displayedColumns = this.mgdp;
}