import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PACKING_TYPE_MASTER_CM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PACKINGTYPEMASTERView_PACKINGTYPEMASTERList_PACKING TYPE MASTER CM_PACKING_TYPE_MASTER_CM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PACKING_TYPE_MASTER_CM.component.html'
})
export class PACKING_TYPE_MASTER_CM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PACKING_TYPE_MASTER_CM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "400px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PACKING_TYPE_MASTER_CM.x;
    }
    Y() {
        return PACKING_TYPE_MASTER_CM.y;
    }
    Width(): string {
        return PACKING_TYPE_MASTER_CM.width;
    }
    Height(): string {
        return PACKING_TYPE_MASTER_CM.height;
    }
    IsCenteredToWindow() {
        return PACKING_TYPE_MASTER_CM.isCenteredToWindow;
    }
    FormName() {
        return PACKING_TYPE_MASTER_CM.formName;
    }
    ShowTitleBar() {
        return PACKING_TYPE_MASTER_CM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PACKING_TYPE_MASTER_CM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PACKING_TYPE_MASTER_CM.isResizable;
    }
    IsMovable() {
        return PACKING_TYPE_MASTER_CM.isMovable;
    }
}