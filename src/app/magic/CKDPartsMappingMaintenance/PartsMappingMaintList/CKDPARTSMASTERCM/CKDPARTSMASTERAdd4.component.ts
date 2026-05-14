import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDPARTSMASTERAdd4.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPartsMappingMaintenance_PartsMappingMaintList_CKDPARTSMASTERCM_CKDPARTSMASTERAdd4',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDPARTSMASTERAdd4.component.html'
})
export class CKDPARTSMASTERAdd4 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDPARTSMASTERAdd4";
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
        return CKDPARTSMASTERAdd4.x;
    }
    Y() {
        return CKDPARTSMASTERAdd4.y;
    }
    Width(): string {
        return CKDPARTSMASTERAdd4.width;
    }
    Height(): string {
        return CKDPARTSMASTERAdd4.height;
    }
    IsCenteredToWindow() {
        return CKDPARTSMASTERAdd4.isCenteredToWindow;
    }
    FormName() {
        return CKDPARTSMASTERAdd4.formName;
    }
    ShowTitleBar() {
        return CKDPARTSMASTERAdd4.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDPARTSMASTERAdd4.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDPARTSMASTERAdd4.isResizable;
    }
    IsMovable() {
        return CKDPARTSMASTERAdd4.isMovable;
    }
}