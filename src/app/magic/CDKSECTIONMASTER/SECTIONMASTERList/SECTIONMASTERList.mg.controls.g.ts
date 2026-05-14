import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SECTIONMASTERList = "SECTIONMASTERList",
        Label1 = "Label1",
        v_AddNew = "v_AddNew",
        Table3 = "Table3",
        Column4 = "Column4",
        SEC_CD = "SEC_CD",
        Column5 = "Column5",
        SEC_DESC = "SEC_DESC",
        Column6 = "Column6",
        Reqprn = "Reqprn",
        Desc = "Desc",
        v_Modify = "v_Modify",
        v_Delete = "v_Delete",
        v_Exit = "v_Exit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column4',
        'Column5',
        'Column6',
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