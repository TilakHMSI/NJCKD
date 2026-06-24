import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./List.mg.controls.g";
import { MgDisplayedColumns } from "./List.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SelectLotCode_List_List',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './List.component.html'
})
export class List extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "List";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return List.x;
    }
    Y() {
        return List.y;
    }
    Width(): string {
        return List.width;
    }
    Height(): string {
        return List.height;
    }
    IsCenteredToWindow() {
        return List.isCenteredToWindow;
    }
    FormName() {
        return List.formName;
    }
    ShowTitleBar() {
        return List.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return List.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return List.isResizable;
    }
    IsMovable() {
        return List.isMovable;
    }
    override displayedColumns = this.mgdp;
}