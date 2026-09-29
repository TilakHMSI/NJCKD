import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ENGINEDETAILS = "ENGINEDETAILS",
        btnexit = "btnexit",
        WRK_EGNO_EGNO = "WRK_EGNO_EGNO",
        Sub1 = "Sub1",
        Save_v = "Save_v",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get WRK_EGNO_EGNO(): FormControl {
        return this.fg.controls[MgControlName.WRK_EGNO_EGNO] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}