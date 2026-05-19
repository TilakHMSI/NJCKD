import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DisplayPackingMaster.mg.controls.g";
import { MgDisplayedColumns } from "./DisplayPackingMaster.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-CKDQ0010PackingMasterInqury_DisplayPackingMaster_DisplayPackingMaster',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./DisplayPackingMaster.component.css'],
    templateUrl: './DisplayPackingMaster.component.html'
})
export class DisplayPackingMaster extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}