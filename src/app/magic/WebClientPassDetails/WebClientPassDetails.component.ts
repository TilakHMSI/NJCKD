import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./WebClientPassDetails.mg.controls.g";
import { MgDisplayedColumns } from "./WebClientPassDetails.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-WebClientPassDetails_WebClientPassDetails',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './WebClientPassDetails.component.html'
})
export class WebClientPassDetails extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "WebClientPassDetails";
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
        return WebClientPassDetails.x;
    }
    Y() {
        return WebClientPassDetails.y;
    }
    Width(): string {
        return WebClientPassDetails.width;
    }
    Height(): string {
        return WebClientPassDetails.height;
    }
    IsCenteredToWindow() {
        return WebClientPassDetails.isCenteredToWindow;
    }
    FormName() {
        return WebClientPassDetails.formName;
    }
    ShowTitleBar() {
        return WebClientPassDetails.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return WebClientPassDetails.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return WebClientPassDetails.isResizable;
    }
    IsMovable() {
        return WebClientPassDetails.isMovable;
    }
    override displayedColumns = this.mgdp;
}