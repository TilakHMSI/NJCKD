import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CompareFramesAndEngines.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CompareFramesAndEngines_CompareFramesAndEngines',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CompareFramesAndEngines.component.html'
})
export class CompareFramesAndEngines extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CompareFramesAndEngines";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return CompareFramesAndEngines.x;
    }
    Y() {
        return CompareFramesAndEngines.y;
    }
    Width(): string {
        return CompareFramesAndEngines.width;
    }
    Height(): string {
        return CompareFramesAndEngines.height;
    }
    IsCenteredToWindow() {
        return CompareFramesAndEngines.isCenteredToWindow;
    }
    FormName() {
        return CompareFramesAndEngines.formName;
    }
    ShowTitleBar() {
        return CompareFramesAndEngines.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CompareFramesAndEngines.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CompareFramesAndEngines.isResizable;
    }
    IsMovable() {
        return CompareFramesAndEngines.isMovable;
    }
}