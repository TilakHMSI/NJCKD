import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDM0020CaseList.mg.controls.g";
import { MgDisplayedColumns } from "./CKDM0020CaseList.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0020CaseMaster_CKDM0020CaseList_CKDM0020CaseList',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./CKDM0020CaseList.component.css'],
    templateUrl: './CKDM0020CaseList.component.html'
})
export class CKDM0020CaseList extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDM0020CaseList";
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
        return CKDM0020CaseList.x;
    }
    Y() {
        return CKDM0020CaseList.y;
    }
    Width(): string {
        return CKDM0020CaseList.width;
    }
    Height(): string {
        return CKDM0020CaseList.height;
    }
    IsCenteredToWindow() {
        return CKDM0020CaseList.isCenteredToWindow;
    }
    FormName() {
        return CKDM0020CaseList.formName;
    }
    ShowTitleBar() {
        return CKDM0020CaseList.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDM0020CaseList.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDM0020CaseList.isResizable;
    }
    IsMovable() {
        return CKDM0020CaseList.isMovable;
    }
    override displayedColumns = this.mgdp;
}