import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDPM010LotMaster.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPM010LotMaster_CKDPM010LotMaster',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDPM010LotMaster.component.html'
})
export class CKDPM010LotMaster extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDPM010LotMaster";
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
        return CKDPM010LotMaster.x;
    }
    Y() {
        return CKDPM010LotMaster.y;
    }
    Width(): string {
        return CKDPM010LotMaster.width;
    }
    Height(): string {
        return CKDPM010LotMaster.height;
    }
    IsCenteredToWindow() {
        return CKDPM010LotMaster.isCenteredToWindow;
    }
    FormName() {
        return CKDPM010LotMaster.formName;
    }
    ShowTitleBar() {
        return CKDPM010LotMaster.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDPM010LotMaster.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDPM010LotMaster.isResizable;
    }
    IsMovable() {
        return CKDPM010LotMaster.isMovable;
    }
}