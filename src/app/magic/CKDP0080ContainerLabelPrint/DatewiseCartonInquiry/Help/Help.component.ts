import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Help.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0080ContainerLabelPrint_DatewiseCartonInquiry_Help_Help',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './Help.component.html'
})
export class Help extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Help";
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
        return Help.x;
    }
    Y() {
        return Help.y;
    }
    Width(): string {
        return Help.width;
    }
    Height(): string {
        return Help.height;
    }
    IsCenteredToWindow() {
        return Help.isCenteredToWindow;
    }
    FormName() {
        return Help.formName;
    }
    ShowTitleBar() {
        return Help.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Help.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return Help.isResizable;
    }
    IsMovable() {
        return Help.isMovable;
    }
}