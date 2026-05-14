import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DATAEXPORTFOREXCISEREPORT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0120PCEngineDetails_DATAEXPORTFOREXCISEREPORT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DATAEXPORTFOREXCISEREPORT.component.html'
})
export class DATAEXPORTFOREXCISEREPORT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DATAEXPORTFOREXCISEREPORT";
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
        return DATAEXPORTFOREXCISEREPORT.x;
    }
    Y() {
        return DATAEXPORTFOREXCISEREPORT.y;
    }
    Width(): string {
        return DATAEXPORTFOREXCISEREPORT.width;
    }
    Height(): string {
        return DATAEXPORTFOREXCISEREPORT.height;
    }
    IsCenteredToWindow() {
        return DATAEXPORTFOREXCISEREPORT.isCenteredToWindow;
    }
    FormName() {
        return DATAEXPORTFOREXCISEREPORT.formName;
    }
    ShowTitleBar() {
        return DATAEXPORTFOREXCISEREPORT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DATAEXPORTFOREXCISEREPORT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DATAEXPORTFOREXCISEREPORT.isResizable;
    }
    IsMovable() {
        return DATAEXPORTFOREXCISEREPORT.isMovable;
    }
}