import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDZ005PackingStation.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ005BrowsePackingStation_CKDZ005PackingStation',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDZ005PackingStation.component.html'
})
export class CKDZ005PackingStation extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDZ005PackingStation";
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
        return CKDZ005PackingStation.x;
    }
    Y() {
        return CKDZ005PackingStation.y;
    }
    Width(): string {
        return CKDZ005PackingStation.width;
    }
    Height(): string {
        return CKDZ005PackingStation.height;
    }
    IsCenteredToWindow() {
        return CKDZ005PackingStation.isCenteredToWindow;
    }
    FormName() {
        return CKDZ005PackingStation.formName;
    }
    ShowTitleBar() {
        return CKDZ005PackingStation.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDZ005PackingStation.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDZ005PackingStation.isResizable;
    }
    IsMovable() {
        return CKDZ005PackingStation.isMovable;
    }
}