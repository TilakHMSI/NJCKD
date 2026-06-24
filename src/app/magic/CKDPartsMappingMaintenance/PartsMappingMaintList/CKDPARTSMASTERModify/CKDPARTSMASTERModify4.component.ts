import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDPARTSMASTERModify4.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPartsMappingMaintenance_PartsMappingMaintList_CKDPARTSMASTERModify_CKDPARTSMASTERModify4',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDPARTSMASTERModify4.component.html'
})
export class CKDPARTSMASTERModify4 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDPARTSMASTERModify4";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CKDPARTSMASTERModify4.x;
    }
    Y() {
        return CKDPARTSMASTERModify4.y;
    }
    Width(): string {
        return CKDPARTSMASTERModify4.width;
    }
    Height(): string {
        return CKDPARTSMASTERModify4.height;
    }
    IsCenteredToWindow() {
        return CKDPARTSMASTERModify4.isCenteredToWindow;
    }
    FormName() {
        return CKDPARTSMASTERModify4.formName;
    }
    ShowTitleBar() {
        return CKDPARTSMASTERModify4.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDPARTSMASTERModify4.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDPARTSMASTERModify4.isResizable;
    }
    IsMovable() {
        return CKDPARTSMASTERModify4.isMovable;
    }
}