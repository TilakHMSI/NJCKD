import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LotTypeCM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0010LotNoCreate_LotTypeEntry_LotTypeCM_LotTypeCM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './LotTypeCM.component.html'
})
export class LotTypeCM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LotTypeCM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "520px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return LotTypeCM.x;
    }
    Y() {
        return LotTypeCM.y;
    }
    Width(): string {
        return LotTypeCM.width;
    }
    Height(): string {
        return LotTypeCM.height;
    }
    IsCenteredToWindow() {
        return LotTypeCM.isCenteredToWindow;
    }
    FormName() {
        return LotTypeCM.formName;
    }
    ShowTitleBar() {
        return LotTypeCM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LotTypeCM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LotTypeCM.isResizable;
    }
    IsMovable() {
        return LotTypeCM.isMovable;
    }
}