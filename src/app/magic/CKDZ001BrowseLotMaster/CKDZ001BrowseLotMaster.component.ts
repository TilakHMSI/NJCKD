import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDZ001BrowseLotMaster.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ001BrowseLotMaster_CKDZ001BrowseLotMaster',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDZ001BrowseLotMaster.component.html'
})
export class CKDZ001BrowseLotMaster extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDZ001BrowseLotMaster";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "550px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return CKDZ001BrowseLotMaster.x;
    }
    Y() {
        return CKDZ001BrowseLotMaster.y;
    }
    Width(): string {
        return CKDZ001BrowseLotMaster.width;
    }
    Height(): string {
        return CKDZ001BrowseLotMaster.height;
    }
    IsCenteredToWindow() {
        return CKDZ001BrowseLotMaster.isCenteredToWindow;
    }
    FormName() {
        return CKDZ001BrowseLotMaster.formName;
    }
    ShowTitleBar() {
        return CKDZ001BrowseLotMaster.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDZ001BrowseLotMaster.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDZ001BrowseLotMaster.isResizable;
    }
    IsMovable() {
        return CKDZ001BrowseLotMaster.isMovable;
    }
}