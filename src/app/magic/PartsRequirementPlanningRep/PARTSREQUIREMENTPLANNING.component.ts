import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PARTSREQUIREMENTPLANNING.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PartsRequirementPlanningRep_PARTSREQUIREMENTPLANNING',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PARTSREQUIREMENTPLANNING.component.html'
})
export class PARTSREQUIREMENTPLANNING extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PARTSREQUIREMENTPLANNING";
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
        return PARTSREQUIREMENTPLANNING.x;
    }
    Y() {
        return PARTSREQUIREMENTPLANNING.y;
    }
    Width(): string {
        return PARTSREQUIREMENTPLANNING.width;
    }
    Height(): string {
        return PARTSREQUIREMENTPLANNING.height;
    }
    IsCenteredToWindow() {
        return PARTSREQUIREMENTPLANNING.isCenteredToWindow;
    }
    FormName() {
        return PARTSREQUIREMENTPLANNING.formName;
    }
    ShowTitleBar() {
        return PARTSREQUIREMENTPLANNING.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PARTSREQUIREMENTPLANNING.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PARTSREQUIREMENTPLANNING.isResizable;
    }
    IsMovable() {
        return PARTSREQUIREMENTPLANNING.isMovable;
    }
}