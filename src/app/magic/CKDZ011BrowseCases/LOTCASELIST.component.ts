import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LOTCASELIST.mg.controls.g";
import { MgDisplayedColumns } from "./LOTCASELIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ011BrowseCases_LOTCASELIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './LOTCASELIST.component.html'
})
export class LOTCASELIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LOTCASELIST";
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
        return LOTCASELIST.x;
    }
    Y() {
        return LOTCASELIST.y;
    }
    Width(): string {
        return LOTCASELIST.width;
    }
    Height(): string {
        return LOTCASELIST.height;
    }
    IsCenteredToWindow() {
        return LOTCASELIST.isCenteredToWindow;
    }
    FormName() {
        return LOTCASELIST.formName;
    }
    ShowTitleBar() {
        return LOTCASELIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LOTCASELIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LOTCASELIST.isResizable;
    }
    IsMovable() {
        return LOTCASELIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}