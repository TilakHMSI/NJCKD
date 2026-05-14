import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PACKINGTYPELIST.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PACKINGTYPELIST_SELECTION_PACKINGTYPELIST',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PACKINGTYPELIST.component.html'
})
export class PACKINGTYPELIST extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PACKINGTYPELIST";
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
        return PACKINGTYPELIST.x;
    }
    Y() {
        return PACKINGTYPELIST.y;
    }
    Width(): string {
        return PACKINGTYPELIST.width;
    }
    Height(): string {
        return PACKINGTYPELIST.height;
    }
    IsCenteredToWindow() {
        return PACKINGTYPELIST.isCenteredToWindow;
    }
    FormName() {
        return PACKINGTYPELIST.formName;
    }
    ShowTitleBar() {
        return PACKINGTYPELIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PACKINGTYPELIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PACKINGTYPELIST.isResizable;
    }
    IsMovable() {
        return PACKINGTYPELIST.isMovable;
    }
}