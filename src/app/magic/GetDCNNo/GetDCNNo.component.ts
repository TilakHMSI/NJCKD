import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./GetDCNNo.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-GetDCNNo_GetDCNNo',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './GetDCNNo.component.html'
})
export class GetDCNNo extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "GetDCNNo";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "520px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return GetDCNNo.x;
    }
    Y() {
        return GetDCNNo.y;
    }
    Width(): string {
        return GetDCNNo.width;
    }
    Height(): string {
        return GetDCNNo.height;
    }
    IsCenteredToWindow() {
        return GetDCNNo.isCenteredToWindow;
    }
    FormName() {
        return GetDCNNo.formName;
    }
    ShowTitleBar() {
        return GetDCNNo.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return GetDCNNo.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return GetDCNNo.isResizable;
    }
    IsMovable() {
        return GetDCNNo.isMovable;
    }
}