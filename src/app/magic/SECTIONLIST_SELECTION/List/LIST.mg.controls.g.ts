import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LIST = "LIST",
        Table1 = "Table1",
        Column2 = "Column2",
        SECTION_MASTER_SEC_DESC = "SECTION_MASTER_SEC_DESC",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get SECTION_MASTER_SEC_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.SECTION_MASTER_SEC_DESC);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}