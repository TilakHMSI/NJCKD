import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ContainerCM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0010ContainerMaster_CKDM0010ContainerList_ContainerCM_ContainerCM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ContainerCM.component.html'
})
export class ContainerCM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ContainerCM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1000px";
    private static readonly height: string = "450px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return ContainerCM.x;
    }
    Y() {
        return ContainerCM.y;
    }
    Width(): string {
        return ContainerCM.width;
    }
    Height(): string {
        return ContainerCM.height;
    }
    IsCenteredToWindow() {
        return ContainerCM.isCenteredToWindow;
    }
    FormName() {
        return ContainerCM.formName;
    }
    ShowTitleBar() {
        return ContainerCM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ContainerCM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ContainerCM.isResizable;
    }
    IsMovable() {
        return ContainerCM.isMovable;
    }
}