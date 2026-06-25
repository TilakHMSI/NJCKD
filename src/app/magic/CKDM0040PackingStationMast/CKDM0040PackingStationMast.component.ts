import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDM0040PackingStationMast.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0040PackingStationMast_CKDM0040PackingStationMast',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./CKDM0040PackingStationMast.component.css'],
    templateUrl: './CKDM0040PackingStationMast.component.html'
})
export class CKDM0040PackingStationMast extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDM0040PackingStationMast";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1220px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CKDM0040PackingStationMast.x;
    }
    Y() {
        return CKDM0040PackingStationMast.y;
    }
    Width(): string {
        return CKDM0040PackingStationMast.width;
    }
    Height(): string {
        return CKDM0040PackingStationMast.height;
    }
    IsCenteredToWindow() {
        return CKDM0040PackingStationMast.isCenteredToWindow;
    }
    FormName() {
        return CKDM0040PackingStationMast.formName;
    }
    ShowTitleBar() {
        return CKDM0040PackingStationMast.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDM0040PackingStationMast.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDM0040PackingStationMast.isResizable;
    }
    IsMovable() {
        return CKDM0040PackingStationMast.isMovable;
    }
}