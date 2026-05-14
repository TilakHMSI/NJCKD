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
        PST_STAT = "PST_STAT",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column4',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PST_STAT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PST_STAT);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}