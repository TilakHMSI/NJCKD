import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./NewLotAddition.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-LOTCOPY_NewLotMasterMaintenance_NewLotAddition',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './NewLotAddition.component.html'
})
export class NewLotAddition extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "NewLotAddition";
   private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "550px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return NewLotAddition.x;
    }
    Y() {
        return NewLotAddition.y;
    }
    Width(): string {
        return NewLotAddition.width;
    }
    Height(): string {
        return NewLotAddition.height;
    }
    IsCenteredToWindow() {
        return NewLotAddition.isCenteredToWindow;
    }
    FormName() {
        return NewLotAddition.formName;
    }
    ShowTitleBar() {
        return NewLotAddition.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return NewLotAddition.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return NewLotAddition.isResizable;
    }
    IsMovable() {
        return NewLotAddition.isMovable;
    }
}