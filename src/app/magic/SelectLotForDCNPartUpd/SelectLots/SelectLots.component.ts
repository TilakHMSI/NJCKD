import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectLots.mg.controls.g";
import { MgDisplayedColumns } from "./SelectLots.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SelectLotForDCNPartUpd_SelectLots_SelectLots',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './SelectLots.component.html'
})
export class SelectLots extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SelectLots";
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
        return SelectLots.x;
    }
    Y() {
        return SelectLots.y;
    }
    Width(): string {
        return SelectLots.width;
    }
    Height(): string {
        return SelectLots.height;
    }
    IsCenteredToWindow() {
        return SelectLots.isCenteredToWindow;
    }
    FormName() {
        return SelectLots.formName;
    }
    ShowTitleBar() {
        return SelectLots.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SelectLots.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SelectLots.isResizable;
    }
    IsMovable() {
        return SelectLots.isMovable;
    }
    override displayedColumns = this.mgdp;
}