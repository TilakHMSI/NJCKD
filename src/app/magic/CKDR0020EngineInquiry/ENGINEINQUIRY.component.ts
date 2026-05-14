import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENGINEINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDR0020EngineInquiry_ENGINEINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ENGINEINQUIRY.component.html'
})
export class ENGINEINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ENGINEINQUIRY";
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
        return ENGINEINQUIRY.x;
    }
    Y() {
        return ENGINEINQUIRY.y;
    }
    Width(): string {
        return ENGINEINQUIRY.width;
    }
    Height(): string {
        return ENGINEINQUIRY.height;
    }
    IsCenteredToWindow() {
        return ENGINEINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return ENGINEINQUIRY.formName;
    }
    ShowTitleBar() {
        return ENGINEINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ENGINEINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ENGINEINQUIRY.isResizable;
    }
    IsMovable() {
        return ENGINEINQUIRY.isMovable;
    }
}