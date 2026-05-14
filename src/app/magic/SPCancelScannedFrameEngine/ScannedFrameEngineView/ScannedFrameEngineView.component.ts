import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ScannedFrameEngineView.mg.controls.g";
import { MgDisplayedColumns } from "./ScannedFrameEngineView.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-SPCancelScannedFrameEngine_ScannedFrameEngineView_ScannedFrameEngineView',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './ScannedFrameEngineView.component.html'
})
export class ScannedFrameEngineView extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}