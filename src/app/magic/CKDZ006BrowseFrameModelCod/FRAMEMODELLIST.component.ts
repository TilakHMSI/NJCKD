import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAMEMODELLIST.mg.controls.g";
import { MgDisplayedColumns } from "./FRAMEMODELLIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ006BrowseFrameModelCod_FRAMEMODELLIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './FRAMEMODELLIST.component.html'
})
export class FRAMEMODELLIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FRAMEMODELLIST";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return FRAMEMODELLIST.x;
    }
    Y() {
        return FRAMEMODELLIST.y;
    }
    Width(): string {
        return FRAMEMODELLIST.width;
    }
    Height(): string {
        return FRAMEMODELLIST.height;
    }
    IsCenteredToWindow() {
        return FRAMEMODELLIST.isCenteredToWindow;
    }
    FormName() {
        return FRAMEMODELLIST.formName;
    }
    ShowTitleBar() {
        return FRAMEMODELLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FRAMEMODELLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FRAMEMODELLIST.isResizable;
    }
    IsMovable() {
        return FRAMEMODELLIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}