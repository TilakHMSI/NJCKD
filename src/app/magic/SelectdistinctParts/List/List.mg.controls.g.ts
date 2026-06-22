import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    List = "List",
        Table1 = "Table1",
        Column2 = "Column2",
        PT_NO = "PT_NO",
        Column3 = "Column3",
        APL_MT = "APL_MT",
        Column4 = "Column4",
        DC_EF_DT = "DC_EF_DT",
        Column5 = "Column5",
        DC_ED_DT = "DC_ED_DT",
        Column6 = "Column6",
        PLANT = "PLANT",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PT_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PT_NO);
    }

    get APL_MT(): FormControl {
        return this.getTableChildFormControl(MgControlName.APL_MT);
    }

    get DC_EF_DT(): FormControl {
        return this.getTableChildFormControl(MgControlName.DC_EF_DT);
    }

    get DC_ED_DT(): FormControl {
        return this.getTableChildFormControl(MgControlName.DC_ED_DT);
    }

    get PLANT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PLANT);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}