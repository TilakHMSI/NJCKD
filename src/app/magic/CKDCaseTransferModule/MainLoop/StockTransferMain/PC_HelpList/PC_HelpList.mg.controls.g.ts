import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PC_HelpList = "PC_HelpList",
        Table1 = "Table1",
        Column2 = "Column2",
        V_PCS_PCNO = "V_PCS_PCNO",
        Column3 = "Column3",
        V_PCS_LTNO = "V_PCS_LTNO",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_PCS_PCNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_PCS_PCNO);
    }

    get V_PCS_LTNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_PCS_LTNO);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}