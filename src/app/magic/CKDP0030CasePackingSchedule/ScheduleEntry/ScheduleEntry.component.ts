import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ScheduleEntry.mg.controls.g";
import { MgDisplayedColumns } from "./ScheduleEntry.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-CKDP0030CasePackingSchedule_ScheduleEntry_ScheduleEntry',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './ScheduleEntry.component.html'
})
export class ScheduleEntry extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}