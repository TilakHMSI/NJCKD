import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PACKINGTYPEMASTERList = "PACKINGTYPEMASTERList",
        btnAdd = "btnAdd",
        Table7 = "Table7",
        Column8 = "Column8",
        PK_TYP_CD = "PK_TYP_CD",
        Column9 = "Column9",
        PK_TYPE_DESC = "PK_TYPE_DESC",
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

    get PK_TYP_CD(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_TYP_CD);
    }

    get PK_TYPE_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_TYPE_DESC);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}