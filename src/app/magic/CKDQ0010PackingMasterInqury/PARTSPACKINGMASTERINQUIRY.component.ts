import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PARTSPACKINGMASTERINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDQ0010PackingMasterInqury_PARTSPACKINGMASTERINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PARTSPACKINGMASTERINQUIRY.component.html'
})
export class PARTSPACKINGMASTERINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PARTSPACKINGMASTERINQUIRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1350px";
    private static readonly height: string = "750px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PARTSPACKINGMASTERINQUIRY.x;
    }
    Y() {
        return PARTSPACKINGMASTERINQUIRY.y;
    }
    Width(): string {
        return PARTSPACKINGMASTERINQUIRY.width;
    }
    Height(): string {
        return PARTSPACKINGMASTERINQUIRY.height;
    }
    IsCenteredToWindow() {
        return PARTSPACKINGMASTERINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return PARTSPACKINGMASTERINQUIRY.formName;
    }
    ShowTitleBar() {
        return PARTSPACKINGMASTERINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PARTSPACKINGMASTERINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PARTSPACKINGMASTERINQUIRY.isResizable;
    }
    IsMovable() {
        return PARTSPACKINGMASTERINQUIRY.isMovable;
    }
}