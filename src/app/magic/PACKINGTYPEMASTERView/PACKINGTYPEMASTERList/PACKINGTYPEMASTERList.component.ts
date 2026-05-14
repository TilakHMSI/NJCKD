import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PACKINGTYPEMASTERList.mg.controls.g";
import { MgDisplayedColumns } from "./PACKINGTYPEMASTERList.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PACKINGTYPEMASTERView_PACKINGTYPEMASTERList_PACKINGTYPEMASTERList',
    providers: [...matMagicProviders],
    standalone: false,    
    styleUrls: ['./PACKINGTYPEMASTERList.component.css'],
    templateUrl: './PACKINGTYPEMASTERList.component.html'
})
export class PACKINGTYPEMASTERList extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PACKINGTYPEMASTERList";
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
        return PACKINGTYPEMASTERList.x;
    }
    Y() {
        return PACKINGTYPEMASTERList.y;
    }
    Width(): string {
        return PACKINGTYPEMASTERList.width;
    }
    Height(): string {
        return PACKINGTYPEMASTERList.height;
    }
    IsCenteredToWindow() {
        return PACKINGTYPEMASTERList.isCenteredToWindow;
    }
    FormName() {
        return PACKINGTYPEMASTERList.formName;
    }
    ShowTitleBar() {
        return PACKINGTYPEMASTERList.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PACKINGTYPEMASTERList.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PACKINGTYPEMASTERList.isResizable;
    }
    IsMovable() {
        return PACKINGTYPEMASTERList.isMovable;
    }
    override displayedColumns = this.mgdp;
}