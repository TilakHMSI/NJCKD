import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PackingMatCM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0030PackingMatMaster_List_PackingMatCM_PackingMatCM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PackingMatCM.component.html'
})
export class PackingMatCM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PackingMatCM";
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
        return PackingMatCM.x;
    }
    Y() {
        return PackingMatCM.y;
    }
    Width(): string {
        return PackingMatCM.width;
    }
    Height(): string {
        return PackingMatCM.height;
    }
    IsCenteredToWindow() {
        return PackingMatCM.isCenteredToWindow;
    }
    FormName() {
        return PackingMatCM.formName;
    }
    ShowTitleBar() {
        return PackingMatCM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PackingMatCM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PackingMatCM.isResizable;
    }
    IsMovable() {
        return PackingMatCM.isMovable;
    }
}