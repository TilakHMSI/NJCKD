import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LOTPACKINGDATAINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDQ0020PackingDataInquiry_LOTPACKINGDATAINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './LOTPACKINGDATAINQUIRY.component.html'
})
export class LOTPACKINGDATAINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LOTPACKINGDATAINQUIRY";
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
        return LOTPACKINGDATAINQUIRY.x;
    }
    Y() {
        return LOTPACKINGDATAINQUIRY.y;
    }
    Width(): string {
        return LOTPACKINGDATAINQUIRY.width;
    }
    Height(): string {
        return LOTPACKINGDATAINQUIRY.height;
    }
    IsCenteredToWindow() {
        return LOTPACKINGDATAINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return LOTPACKINGDATAINQUIRY.formName;
    }
    ShowTitleBar() {
        return LOTPACKINGDATAINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LOTPACKINGDATAINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LOTPACKINGDATAINQUIRY.isResizable;
    }
    IsMovable() {
        return LOTPACKINGDATAINQUIRY.isMovable;
    }
}