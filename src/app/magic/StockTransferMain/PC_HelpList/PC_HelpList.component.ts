import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PC_HelpList.mg.controls.g";
import { MgDisplayedColumns } from "./PC_HelpList.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-StockTransferMain_PC_HelpList_PC_HelpList',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PC_HelpList.component.html'
})
export class PC_HelpList extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PC_HelpList";
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
        return PC_HelpList.x;
    }
    Y() {
        return PC_HelpList.y;
    }
    Width(): string {
        return PC_HelpList.width;
    }
    Height(): string {
        return PC_HelpList.height;
    }
    IsCenteredToWindow() {
        return PC_HelpList.isCenteredToWindow;
    }
    FormName() {
        return PC_HelpList.formName;
    }
    ShowTitleBar() {
        return PC_HelpList.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PC_HelpList.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PC_HelpList.isResizable;
    }
    IsMovable() {
        return PC_HelpList.isMovable;
    }
    override displayedColumns = this.mgdp;
}