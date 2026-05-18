import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDM0030PackingMatMaster.mg.controls.g";
import { MgDisplayedColumns } from "./CKDM0030PackingMatMaster.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0030PackingMatMaster_List_CKDM0030PackingMatMaster',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./CKDM0030PackingMatMaster.component.css'],
    templateUrl: './CKDM0030PackingMatMaster.component.html'
})
export class CKDM0030PackingMatMaster extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDM0030PackingMatMaster";
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
        return CKDM0030PackingMatMaster.x;
    }
    Y() {
        return CKDM0030PackingMatMaster.y;
    }
    Width(): string {
        return CKDM0030PackingMatMaster.width;
    }
    Height(): string {
        return CKDM0030PackingMatMaster.height;
    }
    IsCenteredToWindow() {
        return CKDM0030PackingMatMaster.isCenteredToWindow;
    }
    FormName() {
        return CKDM0030PackingMatMaster.formName;
    }
    ShowTitleBar() {
        return CKDM0030PackingMatMaster.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDM0030PackingMatMaster.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDM0030PackingMatMaster.isResizable;
    }
    IsMovable() {
        return CKDM0030PackingMatMaster.isMovable;
    }
    override displayedColumns = this.mgdp;
}