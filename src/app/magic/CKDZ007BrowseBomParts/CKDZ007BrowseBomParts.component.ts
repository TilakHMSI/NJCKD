import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDZ007BrowseBomParts.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ007BrowseBomParts_CKDZ007BrowseBomParts',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDZ007BrowseBomParts.component.html'
})
export class CKDZ007BrowseBomParts extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDZ007BrowseBomParts";
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
        return CKDZ007BrowseBomParts.x;
    }
    Y() {
        return CKDZ007BrowseBomParts.y;
    }
    Width(): string {
        return CKDZ007BrowseBomParts.width;
    }
    Height(): string {
        return CKDZ007BrowseBomParts.height;
    }
    IsCenteredToWindow() {
        return CKDZ007BrowseBomParts.isCenteredToWindow;
    }
    FormName() {
        return CKDZ007BrowseBomParts.formName;
    }
    ShowTitleBar() {
        return CKDZ007BrowseBomParts.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDZ007BrowseBomParts.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDZ007BrowseBomParts.isResizable;
    }
    IsMovable() {
        return CKDZ007BrowseBomParts.isMovable;
    }
}