import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PACKINGSTATIONMASTERMODIFY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0040PackingStationMast_PackingStationList_Entry_PACKINGSTATIONMASTERMODIFY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PACKINGSTATIONMASTERMODIFY.component.html'
})
export class PACKINGSTATIONMASTERMODIFY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PACKINGSTATIONMASTERMODIFY";
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
        return PACKINGSTATIONMASTERMODIFY.x;
    }
    Y() {
        return PACKINGSTATIONMASTERMODIFY.y;
    }
    Width(): string {
        return PACKINGSTATIONMASTERMODIFY.width;
    }
    Height(): string {
        return PACKINGSTATIONMASTERMODIFY.height;
    }
    IsCenteredToWindow() {
        return PACKINGSTATIONMASTERMODIFY.isCenteredToWindow;
    }
    FormName() {
        return PACKINGSTATIONMASTERMODIFY.formName;
    }
    ShowTitleBar() {
        return PACKINGSTATIONMASTERMODIFY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PACKINGSTATIONMASTERMODIFY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PACKINGSTATIONMASTERMODIFY.isResizable;
    }
    IsMovable() {
        return PACKINGSTATIONMASTERMODIFY.isMovable;
    }
}