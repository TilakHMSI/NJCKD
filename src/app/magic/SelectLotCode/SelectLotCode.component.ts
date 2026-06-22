import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectLotCode.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SelectLotCode_SelectLotCode',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SelectLotCode.component.html'
})
export class SelectLotCode extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SelectLotCode";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return SelectLotCode.x;
    }
    Y() {
        return SelectLotCode.y;
    }
    Width(): string {
        return SelectLotCode.width;
    }
    Height(): string {
        return SelectLotCode.height;
    }
    IsCenteredToWindow() {
        return SelectLotCode.isCenteredToWindow;
    }
    FormName() {
        return SelectLotCode.formName;
    }
    ShowTitleBar() {
        return SelectLotCode.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SelectLotCode.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SelectLotCode.isResizable;
    }
    IsMovable() {
        return SelectLotCode.isMovable;
    }
}