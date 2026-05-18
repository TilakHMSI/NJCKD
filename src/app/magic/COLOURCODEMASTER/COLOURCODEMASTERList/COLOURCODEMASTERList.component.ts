import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLOURCODEMASTERList.mg.controls.g";
import { MgDisplayedColumns } from "./COLOURCODEMASTERList.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-COLOURCODEMASTER_COLOURCODEMASTERList_COLOURCODEMASTERList',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./COLOURCODEMASTERList.component.css'],
    templateUrl: './COLOURCODEMASTERList.component.html'
})
export class COLOURCODEMASTERList extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLOURCODEMASTERList";
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
        return COLOURCODEMASTERList.x;
    }
    Y() {
        return COLOURCODEMASTERList.y;
    }
    Width(): string {
        return COLOURCODEMASTERList.width;
    }
    Height(): string {
        return COLOURCODEMASTERList.height;
    }
    IsCenteredToWindow() {
        return COLOURCODEMASTERList.isCenteredToWindow;
    }
    FormName() {
        return COLOURCODEMASTERList.formName;
    }
    ShowTitleBar() {
        return COLOURCODEMASTERList.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLOURCODEMASTERList.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLOURCODEMASTERList.isResizable;
    }
    IsMovable() {
        return COLOURCODEMASTERList.isMovable;
    }
    override displayedColumns = this.mgdp;
}