import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./UpdateLotDCNUpdation.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-UpdateLotDCNUpdation_UpdateLotDCNUpdation',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './UpdateLotDCNUpdation.component.html'
})
export class UpdateLotDCNUpdation extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "UpdateLotDCNUpdation";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "750px";
    private static readonly height: string = "450px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return UpdateLotDCNUpdation.x;
    }
    Y() {
        return UpdateLotDCNUpdation.y;
    }
    Width(): string {
        return UpdateLotDCNUpdation.width;
    }
    Height(): string {
        return UpdateLotDCNUpdation.height;
    }
    IsCenteredToWindow() {
        return UpdateLotDCNUpdation.isCenteredToWindow;
    }
    FormName() {
        return UpdateLotDCNUpdation.formName;
    }
    ShowTitleBar() {
        return UpdateLotDCNUpdation.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return UpdateLotDCNUpdation.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return UpdateLotDCNUpdation.isResizable;
    }
    IsMovable() {
        return UpdateLotDCNUpdation.isMovable;
    }
}