import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDP0090CartonCaseScanning.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0090CartonCaseScanning_CKDP0090CartonCaseScanning',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDP0090CartonCaseScanning.component.html'
})
export class CKDP0090CartonCaseScanning extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDP0090CartonCaseScanning";
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
        return CKDP0090CartonCaseScanning.x;
    }
    Y() {
        return CKDP0090CartonCaseScanning.y;
    }
    Width(): string {
        return CKDP0090CartonCaseScanning.width;
    }
    Height(): string {
        return CKDP0090CartonCaseScanning.height;
    }
    IsCenteredToWindow() {
        return CKDP0090CartonCaseScanning.isCenteredToWindow;
    }
    FormName() {
        return CKDP0090CartonCaseScanning.formName;
    }
    ShowTitleBar() {
        return CKDP0090CartonCaseScanning.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDP0090CartonCaseScanning.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDP0090CartonCaseScanning.isResizable;
    }
    IsMovable() {
        return CKDP0090CartonCaseScanning.isMovable;
    }
}