import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectNewPartNoFromDCN.mg.controls.g";
import { MgDisplayedColumns } from "./SelectNewPartNoFromDCN.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-UpdateLotDCNUpdation_SelectNewPartNoFromDCN_SelectNewPartNoFromDCN',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './SelectNewPartNoFromDCN.component.html'
})
export class SelectNewPartNoFromDCN extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SelectNewPartNoFromDCN";
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
        return SelectNewPartNoFromDCN.x;
    }
    Y() {
        return SelectNewPartNoFromDCN.y;
    }
    Width(): string {
        return SelectNewPartNoFromDCN.width;
    }
    Height(): string {
        return SelectNewPartNoFromDCN.height;
    }
    IsCenteredToWindow() {
        return SelectNewPartNoFromDCN.isCenteredToWindow;
    }
    FormName() {
        return SelectNewPartNoFromDCN.formName;
    }
    ShowTitleBar() {
        return SelectNewPartNoFromDCN.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SelectNewPartNoFromDCN.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SelectNewPartNoFromDCN.isResizable;
    }
    IsMovable() {
        return SelectNewPartNoFromDCN.isMovable;
    }
    override displayedColumns = this.mgdp;
}