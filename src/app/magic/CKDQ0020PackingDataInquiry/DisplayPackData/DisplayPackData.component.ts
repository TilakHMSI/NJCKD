import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DisplayPackData.mg.controls.g";
import { MgDisplayedColumns } from "./DisplayPackData.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-CKDQ0020PackingDataInquiry_DisplayPackData_DisplayPackData',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./DisplayPackData.component.css'],
    templateUrl: './DisplayPackData.component.html'
})
export class DisplayPackData extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}