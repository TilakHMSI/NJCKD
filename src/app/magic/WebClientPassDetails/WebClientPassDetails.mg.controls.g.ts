import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    WebClientPassDetails = "WebClientPassDetails",
        Table1 = "Table1",
        Column11 = "Column11",
        PassDetails_USERID = "PassDetails_USERID",
        Column12 = "Column12",
        PassDetails_EXPIRYDATE = "PassDetails_EXPIRYDATE",
        Column13 = "Column13",
        PassDetails_FAILLOGONATTEMPTS = "PassDetails_FAILLOGONATTEMPTS",
        Column15 = "Column15",
        btnRemovePasswords = "btnRemovePasswords",
        Column16 = "Column16",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column11',
        'Column12',
        'Column13',
        'Column15',
        'Column16',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PassDetails_USERID(): FormControl {
        return this.getTableChildFormControl(MgControlName.PassDetails_USERID);
    }

    get PassDetails_EXPIRYDATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PassDetails_EXPIRYDATE);
    }

    get PassDetails_FAILLOGONATTEMPTS(): FormControl {
        return this.getTableChildFormControl(MgControlName.PassDetails_FAILLOGONATTEMPTS);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}