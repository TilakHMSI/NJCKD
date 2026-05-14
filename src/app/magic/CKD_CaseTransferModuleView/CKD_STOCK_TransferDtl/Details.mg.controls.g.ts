import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Details = "Details",
        Table1 = "Table1",
        Column2 = "Column2",
        CKD_CASE_TransferDTL_PC_No = "CKD_CASE_TransferDTL_PC_No",
        Column3 = "Column3",
        CKD_CASE_TransferDTL_LOT_ID = "CKD_CASE_TransferDTL_LOT_ID",
        Column4 = "Column4",
        ContainerID = "ContainerID",
        Column5 = "Column5",
        CKD_CASE_TransferDTL_CaseID = "CKD_CASE_TransferDTL_CaseID",
        btn_Exit = "btn_Exit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CKD_CASE_TransferDTL_PC_No(): FormControl {
        return this.getTableChildFormControl(MgControlName.CKD_CASE_TransferDTL_PC_No);
    }

    get CKD_CASE_TransferDTL_LOT_ID(): FormControl {
        return this.getTableChildFormControl(MgControlName.CKD_CASE_TransferDTL_LOT_ID);
    }

    get ContainerID(): FormControl {
        return this.getTableChildFormControl(MgControlName.ContainerID);
    }

    get CKD_CASE_TransferDTL_CaseID(): FormControl {
        return this.getTableChildFormControl(MgControlName.CKD_CASE_TransferDTL_CaseID);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}