import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDZ002ContainerTypeSelection.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDZ002BrowseContainerType_CKDZ002ContainerTypeSelection',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDZ002ContainerTypeSelection.component.html'
})
export class CKDZ002ContainerTypeSelection extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDZ002ContainerTypeSelection";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return CKDZ002ContainerTypeSelection.x;
    }
    Y() {
        return CKDZ002ContainerTypeSelection.y;
    }
    Width(): string {
        return CKDZ002ContainerTypeSelection.width;
    }
    Height(): string {
        return CKDZ002ContainerTypeSelection.height;
    }
    IsCenteredToWindow() {
        return CKDZ002ContainerTypeSelection.isCenteredToWindow;
    }
    FormName() {
        return CKDZ002ContainerTypeSelection.formName;
    }
    ShowTitleBar() {
        return CKDZ002ContainerTypeSelection.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDZ002ContainerTypeSelection.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDZ002ContainerTypeSelection.isResizable;
    }
    IsMovable() {
        return CKDZ002ContainerTypeSelection.isMovable;
    }
}