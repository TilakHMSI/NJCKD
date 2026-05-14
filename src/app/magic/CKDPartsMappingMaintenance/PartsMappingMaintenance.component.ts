import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PartsMappingMaintenance.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDPartsMappingMaintenance_PartsMappingMaintenance',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PartsMappingMaintenance.component.html'
})
export class PartsMappingMaintenance extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PartsMappingMaintenance";
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
        return PartsMappingMaintenance.x;
    }
    Y() {
        return PartsMappingMaintenance.y;
    }
    Width(): string {
        return PartsMappingMaintenance.width;
    }
    Height(): string {
        return PartsMappingMaintenance.height;
    }
    IsCenteredToWindow() {
        return PartsMappingMaintenance.isCenteredToWindow;
    }
    FormName() {
        return PartsMappingMaintenance.formName;
    }
    ShowTitleBar() {
        return PartsMappingMaintenance.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PartsMappingMaintenance.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PartsMappingMaintenance.isResizable;
    }
    IsMovable() {
        return PartsMappingMaintenance.isMovable;
    }
}