import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DisplayCartons.mg.controls.g";
import { MgDisplayedColumns } from "./DisplayCartons.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-CKDP0090CartonCaseScanning_DisplayCartons_DisplayCartons',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./DisplayCartons.component.css'],
    templateUrl: './DisplayCartons.component.html'
})
export class DisplayCartons extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}