import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./REORGANIZEPACKINGMASTER.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPM030PackingMasterReorga_REORGANIZEPACKINGMASTER',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './REORGANIZEPACKINGMASTER.component.html'
})
export class REORGANIZEPACKINGMASTER extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "REORGANIZEPACKINGMASTER";
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
        return REORGANIZEPACKINGMASTER.x;
    }
    Y() {
        return REORGANIZEPACKINGMASTER.y;
    }
    Width(): string {
        return REORGANIZEPACKINGMASTER.width;
    }
    Height(): string {
        return REORGANIZEPACKINGMASTER.height;
    }
    IsCenteredToWindow() {
        return REORGANIZEPACKINGMASTER.isCenteredToWindow;
    }
    FormName() {
        return REORGANIZEPACKINGMASTER.formName;
    }
    ShowTitleBar() {
        return REORGANIZEPACKINGMASTER.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return REORGANIZEPACKINGMASTER.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return REORGANIZEPACKINGMASTER.isResizable;
    }
    IsMovable() {
        return REORGANIZEPACKINGMASTER.isMovable;
    }
}