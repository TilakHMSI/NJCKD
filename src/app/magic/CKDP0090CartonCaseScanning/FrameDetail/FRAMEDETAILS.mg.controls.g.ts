import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FRAMEDETAILS = "FRAMEDETAILS",
        Table1 = "Table1",
        Column2 = "Column2",
        WRK_EGNO_EGNO = "WRK_EGNO_EGNO",
        Save_v = "Save_v",
        btnexit="btnexit"
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get WRK_EGNO_EGNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_EGNO_EGNO);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}