import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./GetPassword4.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPM010LotMaster_LotMasterList_GetPassword_GetPassword4',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './GetPassword4.component.html'
})
export class GetPassword4 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "GetPassword4";
   private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "400px";
    private static readonly height: string = "250px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return GetPassword4.x;
    }
    Y() {
        return GetPassword4.y;
    }
    Width(): string {
        return GetPassword4.width;
    }
    Height(): string {
        return GetPassword4.height;
    }
    IsCenteredToWindow() {
        return GetPassword4.isCenteredToWindow;
    }
    FormName() {
        return GetPassword4.formName;
    }
    ShowTitleBar() {
        return GetPassword4.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return GetPassword4.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return GetPassword4.isResizable;
    }
    IsMovable() {
        return GetPassword4.isMovable;
    }
}