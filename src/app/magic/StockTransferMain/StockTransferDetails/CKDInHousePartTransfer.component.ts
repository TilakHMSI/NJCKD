import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDInHousePartTransfer.mg.controls.g";
import { MgDisplayedColumns } from "./CKDInHousePartTransfer.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-StockTransferMain_StockTransferDetails_CKDInHousePartTransfer',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './CKDInHousePartTransfer.component.html'
})
export class CKDInHousePartTransfer extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDInHousePartTransfer";
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
        return CKDInHousePartTransfer.x;
    }
    Y() {
        return CKDInHousePartTransfer.y;
    }
    Width(): string {
        return CKDInHousePartTransfer.width;
    }
    Height(): string {
        return CKDInHousePartTransfer.height;
    }
    IsCenteredToWindow() {
        return CKDInHousePartTransfer.isCenteredToWindow;
    }
    FormName() {
        return CKDInHousePartTransfer.formName;
    }
    ShowTitleBar() {
        return CKDInHousePartTransfer.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDInHousePartTransfer.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDInHousePartTransfer.isResizable;
    }
    IsMovable() {
        return CKDInHousePartTransfer.isMovable;
    }
    override displayedColumns = this.mgdp;
}