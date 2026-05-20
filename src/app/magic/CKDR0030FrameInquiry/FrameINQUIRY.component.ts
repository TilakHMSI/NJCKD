import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FrameINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDR0030FrameInquiry_FrameINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FrameINQUIRY.component.html'
})
export class FrameINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FrameINQUIRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1220px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return FrameINQUIRY.x;
    }
    Y() {
        return FrameINQUIRY.y;
    }
    Width(): string {
        return FrameINQUIRY.width;
    }
    Height(): string {
        return FrameINQUIRY.height;
    }
    IsCenteredToWindow() {
        return FrameINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return FrameINQUIRY.formName;
    }
    ShowTitleBar() {
        return FrameINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FrameINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FrameINQUIRY.isResizable;
    }
    IsMovable() {
        return FrameINQUIRY.isMovable;
    }
}