import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDPARTSMASTER_CM = "CKDPARTSMASTER_CM",
        btnexit = "btnexit",
        Label1 = "Label1",
        Label2 = "Label2",
        PART_NO = "PART_NO",
        BOMAB44_PT_NAM = "BOMAB44_PT_NAM",
        Label5 = "Label5",
        SEC_CD = "SEC_CD",
        SECTION_MASTER_SEC_DESC = "SECTION_MASTER_SEC_DESC",
        Label8 = "Label8",
        PRT_WGT = "PRT_WGT",
        Label10 = "Label10",
        HW_YN = "HW_YN",
        Label12 = "Label12",
        PK_MAT_TYPE = "PK_MAT_TYPE",
        PK_TYPE_MAST_PK_TYPE_DESC = "PK_TYPE_MAST_PK_TYPE_DESC",
        Label15 = "Label15",
        PK_MAT_CODE = "PK_MAT_CODE",
        PK_MAST_DESC = "PK_MAST_DESC",
        btnSave = "btnSave",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PART_NO(): FormControl {
        return this.fg.controls[MgControlName.PART_NO] as FormControl;
    }

    get BOMAB44_PT_NAM(): FormControl {
        return this.fg.controls[MgControlName.BOMAB44_PT_NAM] as FormControl;
    }

    get SEC_CD(): FormControl {
        return this.fg.controls[MgControlName.SEC_CD] as FormControl;
    }

    get SECTION_MASTER_SEC_DESC(): FormControl {
        return this.fg.controls[MgControlName.SECTION_MASTER_SEC_DESC] as FormControl;
    }

    get PRT_WGT(): FormControl {
        return this.fg.controls[MgControlName.PRT_WGT] as FormControl;
    }

    get HW_YN(): FormControl {
        return this.fg.controls[MgControlName.HW_YN] as FormControl;
    }

    get PK_MAT_TYPE(): FormControl {
        return this.fg.controls[MgControlName.PK_MAT_TYPE] as FormControl;
    }

    get PK_TYPE_MAST_PK_TYPE_DESC(): FormControl {
        return this.fg.controls[MgControlName.PK_TYPE_MAST_PK_TYPE_DESC] as FormControl;
    }

    get PK_MAT_CODE(): FormControl {
        return this.fg.controls[MgControlName.PK_MAT_CODE] as FormControl;
    }

    get PK_MAST_DESC(): FormControl {
        return this.fg.controls[MgControlName.PK_MAST_DESC] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}