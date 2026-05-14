import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDM0010ContainerMaster.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0010ContainerMaster_CKDM0010ContainerMaster',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDM0010ContainerMaster.component.html'
})
export class CKDM0010ContainerMaster extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDM0010ContainerMaster";
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
        return CKDM0010ContainerMaster.x;
    }
    Y() {
        return CKDM0010ContainerMaster.y;
    }
    Width(): string {
        return CKDM0010ContainerMaster.width;
    }
    Height(): string {
        return CKDM0010ContainerMaster.height;
    }
    IsCenteredToWindow() {
        return CKDM0010ContainerMaster.isCenteredToWindow;
    }
    FormName() {
        return CKDM0010ContainerMaster.formName;
    }
    ShowTitleBar() {
        return CKDM0010ContainerMaster.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDM0010ContainerMaster.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDM0010ContainerMaster.isResizable;
    }
    IsMovable() {
        return CKDM0010ContainerMaster.isMovable;
    }
}