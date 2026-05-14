import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FRAMEMODELLIST = "FRAMEMODELLIST",
        Edit1 = "Edit1",
        Table2 = "Table2",
        Column3 = "Column3",
        V_Frame_Model_Code_v = "V_Frame_Model_Code_v",
        Column4 = "Column4",
        V_Model_Name_v = "V_Model_Name_v",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get V_Frame_Model_Code_v(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Frame_Model_Code_v);
    }

    get V_Model_Name_v(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Model_Name_v);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}