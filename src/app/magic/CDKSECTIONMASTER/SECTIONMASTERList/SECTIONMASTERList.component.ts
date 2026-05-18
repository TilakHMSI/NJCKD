import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SECTIONMASTERList.mg.controls.g";
import { MgDisplayedColumns } from "./SECTIONMASTERList.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CDKSECTIONMASTER_SECTIONMASTERList_SECTIONMASTERList',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./SECTIONMASTERList.component.css'],
    templateUrl: './SECTIONMASTERList.component.html'
})
export class SECTIONMASTERList extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SECTIONMASTERList";
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
        return SECTIONMASTERList.x;
    }
    Y() {
        return SECTIONMASTERList.y;
    }
    Width(): string {
        return SECTIONMASTERList.width;
    }
    Height(): string {
        return SECTIONMASTERList.height;
    }
    IsCenteredToWindow() {
        return SECTIONMASTERList.isCenteredToWindow;
    }
    FormName() {
        return SECTIONMASTERList.formName;
    }
    ShowTitleBar() {
        return SECTIONMASTERList.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SECTIONMASTERList.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SECTIONMASTERList.isResizable;
    }
    IsMovable() {
        return SECTIONMASTERList.isMovable;
    }
    override displayedColumns = this.mgdp;
}