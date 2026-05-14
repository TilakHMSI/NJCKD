import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDPARTSMASTERView.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPARTSMASTERView_CKDPARTSMASTERView',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDPARTSMASTERView.component.html'
})
export class CKDPARTSMASTERView extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDPARTSMASTERView";
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
        return CKDPARTSMASTERView.x;
    }
    Y() {
        return CKDPARTSMASTERView.y;
    }
    Width(): string {
        return CKDPARTSMASTERView.width;
    }
    Height(): string {
        return CKDPARTSMASTERView.height;
    }
    IsCenteredToWindow() {
        return CKDPARTSMASTERView.isCenteredToWindow;
    }
    FormName() {
        return CKDPARTSMASTERView.formName;
    }
    ShowTitleBar() {
        return CKDPARTSMASTERView.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDPARTSMASTERView.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDPARTSMASTERView.isResizable;
    }
    IsMovable() {
        return CKDPARTSMASTERView.isMovable;
    }
}