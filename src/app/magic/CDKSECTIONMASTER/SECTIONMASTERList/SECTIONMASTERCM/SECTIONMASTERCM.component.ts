import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SECTIONMASTERCM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CDKSECTIONMASTER_SECTIONMASTERList_SECTIONMASTERCM_SECTIONMASTERCM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SECTIONMASTERCM.component.html'
})
export class SECTIONMASTERCM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SECTIONMASTERCM";
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
        return SECTIONMASTERCM.x;
    }
    Y() {
        return SECTIONMASTERCM.y;
    }
    Width(): string {
        return SECTIONMASTERCM.width;
    }
    Height(): string {
        return SECTIONMASTERCM.height;
    }
    IsCenteredToWindow() {
        return SECTIONMASTERCM.isCenteredToWindow;
    }
    FormName() {
        return SECTIONMASTERCM.formName;
    }
    ShowTitleBar() {
        return SECTIONMASTERCM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SECTIONMASTERCM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SECTIONMASTERCM.isResizable;
    }
    IsMovable() {
        return SECTIONMASTERCM.isMovable;
    }
}