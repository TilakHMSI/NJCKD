import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CARTONTYPELIST.mg.controls.g";
import { MgDisplayedColumns } from "./CARTONTYPELIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ003BrowseCaseType_List_CARTONTYPELIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './CARTONTYPELIST.component.html'
})
export class CARTONTYPELIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CARTONTYPELIST";
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
        return CARTONTYPELIST.x;
    }
    Y() {
        return CARTONTYPELIST.y;
    }
    Width(): string {
        return CARTONTYPELIST.width;
    }
    Height(): string {
        return CARTONTYPELIST.height;
    }
    IsCenteredToWindow() {
        return CARTONTYPELIST.isCenteredToWindow;
    }
    FormName() {
        return CARTONTYPELIST.formName;
    }
    ShowTitleBar() {
        return CARTONTYPELIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CARTONTYPELIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CARTONTYPELIST.isResizable;
    }
    IsMovable() {
        return CARTONTYPELIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}