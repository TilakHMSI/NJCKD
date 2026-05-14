import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDInHousePartTransfer = "CKDInHousePartTransfer",
        Table1 = "Table1",
        Column2 = "Column2",
        CKD_CASE_TransferTEMP_PC_No = "CKD_CASE_TransferTEMP_PC_No",
        Column3 = "Column3",
        CKD_CASE_TransferTEMP_LOT_ID = "CKD_CASE_TransferTEMP_LOT_ID",
        Column4 = "Column4",
        ContainerID = "ContainerID",
        Column5 = "Column5",
        CKD_CASE_TransferTEMP_CaseID = "CKD_CASE_TransferTEMP_CaseID",
        Column6 = "Column6",
        TransferCreateDate = "TransferCreateDate",
        Column7 = "Column7",
        TransferCreateTime = "TransferCreateTime",
        Column8 = "Column8",
        TransferCreateBy = "TransferCreateBy",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CKD_CASE_TransferTEMP_PC_No(): FormControl {
        return this.getTableChildFormControl(MgControlName.CKD_CASE_TransferTEMP_PC_No);
    }

    get CKD_CASE_TransferTEMP_LOT_ID(): FormControl {
        return this.getTableChildFormControl(MgControlName.CKD_CASE_TransferTEMP_LOT_ID);
    }

    get ContainerID(): FormControl {
        return this.getTableChildFormControl(MgControlName.ContainerID);
    }

    get CKD_CASE_TransferTEMP_CaseID(): FormControl {
        return this.getTableChildFormControl(MgControlName.CKD_CASE_TransferTEMP_CaseID);
    }

    get TransferCreateDate(): FormControl {
        return this.getTableChildFormControl(MgControlName.TransferCreateDate);
    }

    get TransferCreateTime(): FormControl {
        return this.getTableChildFormControl(MgControlName.TransferCreateTime);
    }

    get TransferCreateBy(): FormControl {
        return this.getTableChildFormControl(MgControlName.TransferCreateBy);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}