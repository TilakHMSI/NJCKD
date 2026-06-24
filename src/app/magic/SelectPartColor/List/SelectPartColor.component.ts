import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectPartColor.mg.controls.g";
import { MgDisplayedColumns } from "./SelectPartColor.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SelectPartColor_List_SelectPartColor',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './SelectPartColor.component.html'
})
export class SelectPartColor extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SelectPartColor";
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
        return SelectPartColor.x;
    }
    Y() {
        return SelectPartColor.y;
    }
    Width(): string {
        return SelectPartColor.width;
    }
    Height(): string {
        return SelectPartColor.height;
    }
    IsCenteredToWindow() {
        return SelectPartColor.isCenteredToWindow;
    }
    FormName() {
        return SelectPartColor.formName;
    }
    ShowTitleBar() {
        return SelectPartColor.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SelectPartColor.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SelectPartColor.isResizable;
    }
    IsMovable() {
        return SelectPartColor.isMovable;
    }
    override displayedColumns = this.mgdp;
}