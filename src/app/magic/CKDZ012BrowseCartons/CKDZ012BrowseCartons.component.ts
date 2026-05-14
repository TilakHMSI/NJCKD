import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDZ012BrowseCartons.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ012BrowseCartons_CKDZ012BrowseCartons',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDZ012BrowseCartons.component.html'
})
export class CKDZ012BrowseCartons extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDZ012BrowseCartons";
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
        return CKDZ012BrowseCartons.x;
    }
    Y() {
        return CKDZ012BrowseCartons.y;
    }
    Width(): string {
        return CKDZ012BrowseCartons.width;
    }
    Height(): string {
        return CKDZ012BrowseCartons.height;
    }
    IsCenteredToWindow() {
        return CKDZ012BrowseCartons.isCenteredToWindow;
    }
    FormName() {
        return CKDZ012BrowseCartons.formName;
    }
    ShowTitleBar() {
        return CKDZ012BrowseCartons.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDZ012BrowseCartons.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDZ012BrowseCartons.isResizable;
    }
    IsMovable() {
        return CKDZ012BrowseCartons.isMovable;
    }
}