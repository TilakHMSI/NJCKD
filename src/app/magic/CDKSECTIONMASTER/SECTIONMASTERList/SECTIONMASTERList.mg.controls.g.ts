import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SECTIONMASTERList = "SECTIONMASTERList",
        btnAdd = "btnAdd",
        Table3 = "Table3",
        Column4 = "Column4",
        SEC_CD = "SEC_CD",
        Column5 = "Column5",
        SEC_DESC = "SEC_DESC",
        Column6 = "Column6",
        Reqprn = "Reqprn",
        Column14 = "Column14",
        btnEdit = "btnEdit",
        btnDelete = "btnDelete",
        Desc = "Desc",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column4',
        'Column5',
        'Column6',
        'Column14',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get SEC_CD(): FormControl {
        return this.getTableChildFormControl(MgControlName.SEC_CD);
    }

    get SEC_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.SEC_DESC);
    }

    get Reqprn(): FormControl {
        return this.getTableChildFormControl(MgControlName.Reqprn);
    }

    get Desc(): FormControl {
        return this.fg.controls[MgControlName.Desc] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}