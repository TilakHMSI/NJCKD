import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    COLOURCODEMASTERList = "COLOURCODEMASTERList",
        btnAdd = "btnAdd",
        Table7 = "Table7",
        Column8 = "Column8",
        CEATFG = "CEATFG",
        Column9 = "Column9",
        CECLC1 = "CECLC1",
        Column22 = "Column22",
        btnEdit = "btnEdit",
        btnDelete = "btnDelete",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column8',
        'Column9',
        'Column22',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CEATFG(): FormControl {
        return this.getTableChildFormControl(MgControlName.CEATFG);
    }

    get CECLC1(): FormControl {
        return this.getTableChildFormControl(MgControlName.CECLC1);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}