import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SECTIONLIST.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SECTIONLIST_SELECTION_SECTIONLIST',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SECTIONLIST.component.html'
})
export class SECTIONLIST extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SECTIONLIST";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "550px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return SECTIONLIST.x;
    }
    Y() {
        return SECTIONLIST.y;
    }
    Width(): string {
        return SECTIONLIST.width;
    }
    Height(): string {
        return SECTIONLIST.height;
    }
    IsCenteredToWindow() {
        return SECTIONLIST.isCenteredToWindow;
    }
    FormName() {
        return SECTIONLIST.formName;
    }
    ShowTitleBar() {
        return SECTIONLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SECTIONLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SECTIONLIST.isResizable;
    }
    IsMovable() {
        return SECTIONLIST.isMovable;
    }
}