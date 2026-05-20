import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKD_CaseTransferModuleView = "CKD_CaseTransferModuleView",
        Table2 = "Table2",
        Column3 = "Column3",
        TransferChallanNo = "TransferChallanNo",
        Column4 = "Column4",
        TransferChallanDate = "TransferChallanDate",
        Column5 = "Column5",
        TransferChallanTime = "TransferChallanTime",
        Column6 = "Column6",
        TransferMode = "TransferMode",
        Column7 = "Column7",
        CKD_CASE_TransferDTL_PC_No = "CKD_CASE_TransferDTL_PC_No",
        Column8 = "Column8",
        CKD_CASE_TransferDTL_LOT_ID = "CKD_CASE_TransferDTL_LOT_ID",
        Label1 = "Label1",
        v_Details = "v_Details",
        v_Print_Challan = "v_Print_Challan",
        btnexit = "btnexit",
        vBlob64base="vBlob64base",
        vFileName="vFileName"
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get TransferChallanNo(): FormControl {
        return this.getTableChildFormControl(MgControlName.TransferChallanNo);
    }

    get TransferChallanDate(): FormControl {
        return this.getTableChildFormControl(MgControlName.TransferChallanDate);
    }

    get TransferChallanTime(): FormControl {
        return this.getTableChildFormControl(MgControlName.TransferChallanTime);
    }

    get TransferMode(): FormControl {
        return this.getTableChildFormControl(MgControlName.TransferMode);
    }

    get CKD_CASE_TransferDTL_PC_No(): FormControl {
        return this.getTableChildFormControl(MgControlName.CKD_CASE_TransferDTL_PC_No);
    }

    get CKD_CASE_TransferDTL_LOT_ID(): FormControl {
        return this.getTableChildFormControl(MgControlName.CKD_CASE_TransferDTL_LOT_ID);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}