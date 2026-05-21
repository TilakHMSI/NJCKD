import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDZ008BrowsePCList.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ008BrowsePCList_CKDZ008BrowsePCList',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDZ008BrowsePCList.component.html'
})
export class CKDZ008BrowsePCList extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDZ008BrowsePCList";
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
        return CKDZ008BrowsePCList.x;
    }
    Y() {
        return CKDZ008BrowsePCList.y;
    }
    Width(): string {
        return CKDZ008BrowsePCList.width;
    }
    Height(): string {
        return CKDZ008BrowsePCList.height;
    }
    IsCenteredToWindow() {
        return CKDZ008BrowsePCList.isCenteredToWindow;
    }
    FormName() {
        return CKDZ008BrowsePCList.formName;
    }
    ShowTitleBar() {
        return CKDZ008BrowsePCList.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDZ008BrowsePCList.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDZ008BrowsePCList.isResizable;
    }
    IsMovable() {
        return CKDZ008BrowsePCList.isMovable;
    }
}