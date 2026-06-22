import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LotMasterCM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPM010LotMaster_LotMasterList_LotMasterCM_LotMasterCM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './LotMasterCM.component.html'
})
export class LotMasterCM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LotMasterCM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "400px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return LotMasterCM.x;
    }
    Y() {
        return LotMasterCM.y;
    }
    Width(): string {
        return LotMasterCM.width;
    }
    Height(): string {
        return LotMasterCM.height;
    }
    IsCenteredToWindow() {
        return LotMasterCM.isCenteredToWindow;
    }
    FormName() {
        return LotMasterCM.formName;
    }
    ShowTitleBar() {
        return LotMasterCM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LotMasterCM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LotMasterCM.isResizable;
    }
    IsMovable() {
        return LotMasterCM.isMovable;
    }
}