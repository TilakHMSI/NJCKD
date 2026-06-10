import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PackingMatDetails.mg.controls.g";
import { MgDisplayedColumns } from "./PackingMatDetails.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-GetPakingMaterialEntry_PackingMatDetails',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PackingMatDetails.component.html'
})
export class PackingMatDetails extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PackingMatDetails";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "520px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PackingMatDetails.x;
    }
    Y() {
        return PackingMatDetails.y;
    }
    Width(): string {
        return PackingMatDetails.width;
    }
    Height(): string {
        return PackingMatDetails.height;
    }
    IsCenteredToWindow() {
        return PackingMatDetails.isCenteredToWindow;
    }
    FormName() {
        return PackingMatDetails.formName;
    }
    ShowTitleBar() {
        return PackingMatDetails.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PackingMatDetails.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PackingMatDetails.isResizable;
    }
    IsMovable() {
        return PackingMatDetails.isMovable;
    }
    override displayedColumns = this.mgdp;
}