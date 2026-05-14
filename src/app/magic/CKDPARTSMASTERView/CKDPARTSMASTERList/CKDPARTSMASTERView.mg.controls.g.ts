import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDPARTSMASTERView = "CKDPARTSMASTERView",
        btnAdd = "btnAdd",
        Table9 = "Table9",
        Column10 = "Column10",
        PART_NO = "PART_NO",
        Column11 = "Column11",
        PRT_WGT = "PRT_WGT",
        Column12 = "Column12",
        HW_YN = "HW_YN",
        Column13 = "Column13",
        PK_TYPE_MAST_PK_TYPE_DESC = "PK_TYPE_MAST_PK_TYPE_DESC",
        Column14 = "Column14",
        PK_MAST_DESC = "PK_MAST_DESC",
        Column24 = "Column24",
        PT_NAM = "PT_NAM",
        Column25 = "Column25",
        SEC_DESC = "SEC_DESC",
        Column26 = "Column26",
        btnEdit = "btnEdit",
        btnDelete = "btnDelete",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column10',
        'Column11',
        'Column12',
        'Column13',
        'Column14',
        'Column24',
        'Column25',
        'Column26',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PART_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PART_NO);
    }

    get PRT_WGT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRT_WGT);
    }

    get HW_YN(): FormControl {
        return this.getTableChildFormControl(MgControlName.HW_YN);
    }

    get PK_TYPE_MAST_PK_TYPE_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_TYPE_MAST_PK_TYPE_DESC);
    }

    get PK_MAST_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_MAST_DESC);
    }

    get PT_NAM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PT_NAM);
    }

    get SEC_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.SEC_DESC);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}