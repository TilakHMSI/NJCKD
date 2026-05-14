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
        Column4 = "Column4",
        CODE = "CODE",
        Column2 = "Column2",
        DESC = "DESC",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column4',
        'Column2',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.CODE);
    }

    get DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.DESC);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}