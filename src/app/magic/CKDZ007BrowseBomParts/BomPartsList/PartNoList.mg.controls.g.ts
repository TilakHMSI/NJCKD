import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PartNoList = "PartNoList",
        Table2 = "Table2",
        Column3 = "Column3",
        V_Part_No_v1 = "V_Part_No_v1",
        Column4 = "Column4",
        BOMAB44_PT_NAM = "BOMAB44_PT_NAM",
        Column5 = "Column5",
        Model_Code_p = "Model_Code_p",
        Column6 = "Column6",
        S1_EFM = "S1_EFM",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
        'Column6',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_Part_No_v1(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Part_No_v1);
    }

    get BOMAB44_PT_NAM(): FormControl {
        return this.getTableChildFormControl(MgControlName.BOMAB44_PT_NAM);
    }

    get Model_Code_p(): FormControl {
        return this.getTableChildFormControl(MgControlName.Model_Code_p);
    }

    get S1_EFM(): FormControl {
        return this.getTableChildFormControl(MgControlName.S1_EFM);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}