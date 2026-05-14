import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DCNNoList = "DCNNoList",
        Table1 = "Table1",
        Column2 = "Column2",
        V_DC_NO = "V_DC_NO",
        Column3 = "Column3",
        V_v_Date = "V_v_Date",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_DC_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_DC_NO);
    }

    get V_v_Date(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_v_Date);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}