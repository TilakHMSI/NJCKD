import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CONTAINERLABELPRINT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0080ContainerLabelPrint_CONTAINERLABELPRINT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CONTAINERLABELPRINT.component.html'
})
export class CONTAINERLABELPRINT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CONTAINERLABELPRINT";
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
        return CONTAINERLABELPRINT.x;
    }
    Y() {
        return CONTAINERLABELPRINT.y;
    }
    Width(): string {
        return CONTAINERLABELPRINT.width;
    }
    Height(): string {
        return CONTAINERLABELPRINT.height;
    }
    IsCenteredToWindow() {
        return CONTAINERLABELPRINT.isCenteredToWindow;
    }
    FormName() {
        return CONTAINERLABELPRINT.formName;
    }
    ShowTitleBar() {
        return CONTAINERLABELPRINT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CONTAINERLABELPRINT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CONTAINERLABELPRINT.isResizable;
    }
    IsMovable() {
        return CONTAINERLABELPRINT.isMovable;
    }
}