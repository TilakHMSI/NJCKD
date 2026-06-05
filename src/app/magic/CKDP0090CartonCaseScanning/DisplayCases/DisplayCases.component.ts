import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DisplayCases.mg.controls.g";
import { MgDisplayedColumns } from "./DisplayCases.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-CKDP0090CartonCaseScanning_DisplayCases_DisplayCases',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./DisplayCases.component.css'],
    templateUrl: './DisplayCases.component.html'
})
export class DisplayCases extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}