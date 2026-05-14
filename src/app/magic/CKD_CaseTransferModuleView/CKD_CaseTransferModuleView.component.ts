import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKD_CaseTransferModuleView.mg.controls.g";
import { MgDisplayedColumns } from "./CKD_CaseTransferModuleView.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKD_CaseTransferModuleView_CKD_CaseTransferModuleView',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './CKD_CaseTransferModuleView.component.html'
})
export class CKD_CaseTransferModuleView extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKD_CaseTransferModuleView";
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
        return CKD_CaseTransferModuleView.x;
    }
    Y() {
        return CKD_CaseTransferModuleView.y;
    }
    Width(): string {
        return CKD_CaseTransferModuleView.width;
    }
    Height(): string {
        return CKD_CaseTransferModuleView.height;
    }
    IsCenteredToWindow() {
        return CKD_CaseTransferModuleView.isCenteredToWindow;
    }
    FormName() {
        return CKD_CaseTransferModuleView.formName;
    }
    ShowTitleBar() {
        return CKD_CaseTransferModuleView.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKD_CaseTransferModuleView.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKD_CaseTransferModuleView.isResizable;
    }
    IsMovable() {
        return CKD_CaseTransferModuleView.isMovable;
    }
    override displayedColumns = this.mgdp;
}