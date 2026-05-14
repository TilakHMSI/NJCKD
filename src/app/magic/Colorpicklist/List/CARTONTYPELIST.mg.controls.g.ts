import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CARTONTYPELIST = "CARTONTYPELIST",
        Table2 = "Table2",
        Column3 = "Column3",
        CECLC1 = "CECLC1",
        Column4 = "Column4",
        CECLN1 = "CECLN1",
        Column5 = "Column5",
        CEHCC1 = "CEHCC1",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CECLC1(): FormControl {
        return this.getTableChildFormControl(MgControlName.CECLC1);
    }

    get CECLN1(): FormControl {
        return this.getTableChildFormControl(MgControlName.CECLN1);
    }

    get CEHCC1(): FormControl {
        return this.getTableChildFormControl(MgControlName.CEHCC1);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}