import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDM0030PackingMatMaster = "CKDM0030PackingMatMaster",
        btnAdd = "btnAdd",
        Table23 = "Table23",
        Column24 = "Column24",
        CODE = "CODE",
        Column25 = "Column25",
        DESC = "DESC",
        Column32 = "Column32",
        btnEdit = "btnEdit",
        btnDelete = "btnDelete",
        Label17 = "Label17",
        Label2 = "Label2",
        Label21 = "Label21",
        Label5 = "Label5",
        Label8 = "Label8",
        Label14 = "Label14",
        Label11 = "Label11",
        PK_TYPE_MAST_PK_TYP_CD = "PK_TYPE_MAST_PK_TYP_CD",
        LENG = "LENG",
        HEIG = "HEIG",
        WIDT = "WIDT",
        WEIG = "WEIG",
        EF_DT = "EF_DT",
        VARNC = "VARNC",
        PK_TYPE_MAST_PK_TYPE_DESC = "PK_TYPE_MAST_PK_TYPE_DESC",
        Label7 = "Label7",
        Label10 = "Label10",
        Label13 = "Label13",
        Label16 = "Label16",
        Label19 = "Label19",
        ED_DT = "ED_DT",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column24',
        'Column25',
        'Column32',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.CODE);
    }

    get DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.DESC);
    }

    get PK_TYPE_MAST_PK_TYP_CD(): FormControl {
        return this.fg.controls[MgControlName.PK_TYPE_MAST_PK_TYP_CD] as FormControl;
    }

    get LENG(): FormControl {
        return this.fg.controls[MgControlName.LENG] as FormControl;
    }

    get HEIG(): FormControl {
        return this.fg.controls[MgControlName.HEIG] as FormControl;
    }

    get WIDT(): FormControl {
        return this.fg.controls[MgControlName.WIDT] as FormControl;
    }

    get WEIG(): FormControl {
        return this.fg.controls[MgControlName.WEIG] as FormControl;
    }

    get EF_DT(): FormControl {
        return this.fg.controls[MgControlName.EF_DT] as FormControl;
    }

    get VARNC(): FormControl {
        return this.fg.controls[MgControlName.VARNC] as FormControl;
    }

    get PK_TYPE_MAST_PK_TYPE_DESC(): FormControl {
        return this.fg.controls[MgControlName.PK_TYPE_MAST_PK_TYPE_DESC] as FormControl;
    }

    get ED_DT(): FormControl {
        return this.fg.controls[MgControlName.ED_DT] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}