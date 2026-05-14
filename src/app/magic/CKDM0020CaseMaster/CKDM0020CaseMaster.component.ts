import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDM0020CaseMaster.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0020CaseMaster_CKDM0020CaseMaster',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDM0020CaseMaster.component.html'
})
export class CKDM0020CaseMaster extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDM0020CaseMaster";
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
        return CKDM0020CaseMaster.x;
    }
    Y() {
        return CKDM0020CaseMaster.y;
    }
    Width(): string {
        return CKDM0020CaseMaster.width;
    }
    Height(): string {
        return CKDM0020CaseMaster.height;
    }
    IsCenteredToWindow() {
        return CKDM0020CaseMaster.isCenteredToWindow;
    }
    FormName() {
        return CKDM0020CaseMaster.formName;
    }
    ShowTitleBar() {
        return CKDM0020CaseMaster.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDM0020CaseMaster.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDM0020CaseMaster.isResizable;
    }
    IsMovable() {
        return CKDM0020CaseMaster.isMovable;
    }
}