import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ScannedFrameEngineView.mg.controls.g";
import { MgDisplayedColumns } from "./ScannedFrameEngineView.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CancelAllFrameEngines_ScannedFrameEngineView_ScannedFrameEngineView',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './ScannedFrameEngineView.component.html'
})
export class ScannedFrameEngineView extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ScannedFrameEngineView";
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
        return ScannedFrameEngineView.x;
    }
    Y() {
        return ScannedFrameEngineView.y;
    }
    Width(): string {
        return ScannedFrameEngineView.width;
    }
    Height(): string {
        return ScannedFrameEngineView.height;
    }
    IsCenteredToWindow() {
        return ScannedFrameEngineView.isCenteredToWindow;
    }
    FormName() {
        return ScannedFrameEngineView.formName;
    }
    ShowTitleBar() {
        return ScannedFrameEngineView.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ScannedFrameEngineView.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ScannedFrameEngineView.isResizable;
    }
    IsMovable() {
        return ScannedFrameEngineView.isMovable;
    }
    override displayedColumns = this.mgdp;
}