import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LIST.mg.controls.g";
import { MgDisplayedColumns } from "./LIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SECTIONLIST_SELECTION_List_LIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './LIST.component.html'
})
export class LIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LIST";
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
        return LIST.x;
    }
    Y() {
        return LIST.y;
    }
    Width(): string {
        return LIST.width;
    }
    Height(): string {
        return LIST.height;
    }
    IsCenteredToWindow() {
        return LIST.isCenteredToWindow;
    }
    FormName() {
        return LIST.formName;
    }
    ShowTitleBar() {
        return LIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LIST.isResizable;
    }
    IsMovable() {
        return LIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}