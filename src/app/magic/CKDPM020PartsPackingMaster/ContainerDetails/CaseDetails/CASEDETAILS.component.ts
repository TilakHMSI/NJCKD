import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CASEDETAILS.mg.controls.g";
import { MgDisplayedColumns } from "./CASEDETAILS.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPM020PartsPackingMaster_ContainerDetails_CaseDetails_CASEDETAILS',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './CASEDETAILS.component.html'
})
export class CASEDETAILS extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CASEDETAILS";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return CASEDETAILS.x;
    }
    Y() {
        return CASEDETAILS.y;
    }
    Width(): string {
        return CASEDETAILS.width;
    }
    Height(): string {
        return CASEDETAILS.height;
    }
    IsCenteredToWindow() {
        return CASEDETAILS.isCenteredToWindow;
    }
    FormName() {
        return CASEDETAILS.formName;
    }
    ShowTitleBar() {
        return CASEDETAILS.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CASEDETAILS.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CASEDETAILS.isResizable;
    }
    IsMovable() {
        return CASEDETAILS.isMovable;
    }
    override displayedColumns = this.mgdp;
}