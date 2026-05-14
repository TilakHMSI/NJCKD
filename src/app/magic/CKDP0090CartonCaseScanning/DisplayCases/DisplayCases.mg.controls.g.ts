import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DisplayCases = "DisplayCases",
        Table14 = "Table14",
        Column15 = "Column15",
        WRK_CROF_PCNO = "WRK_CROF_PCNO",
        Edit27 = "Edit27",
        PCS_DATA_PCS_APDT = "PCS_DATA_PCS_APDT",
        PCS_DATA_PCS_APTM = "PCS_DATA_PCS_APTM",
        Column16 = "Column16",
        PCS_DATA_PCS_LTNO = "PCS_DATA_PCS_LTNO",
        Edit28 = "Edit28",
        PCS_DATA_PCS_PLDT = "PCS_DATA_PCS_PLDT",
        PCS_DATA_PCS_PLTM = "PCS_DATA_PCS_PLTM",
        Column17 = "Column17",
        PCS_DATA_PCS_CNNO = "PCS_DATA_PCS_CNNO",
        Edit29 = "Edit29",
        PCS_DATA_PCS_PPDT = "PCS_DATA_PCS_PPDT",
        PCS_DATA_PCS_PPTM = "PCS_DATA_PCS_PPTM",
        Column18 = "Column18",
        PCS_DATA_PCS_CSNO = "PCS_DATA_PCS_CSNO",
        Edit30 = "Edit30",
        PCS_DATA_PCS_LBDT = "PCS_DATA_PCS_LBDT",
        PCS_DATA_PCS_LBTM = "PCS_DATA_PCS_LBTM",
        Column19 = "Column19",
        PCS_DATA_PCS_CSTY = "PCS_DATA_PCS_CSTY",
        Edit31 = "Edit31",
        PCS_DATA_PCS_APKD = "PCS_DATA_PCS_APKD",
        PCS_DATA_PCS_APKT = "PCS_DATA_PCS_APKT",
        Column20 = "Column20",
        Edit26 = "Edit26",
        Edit32 = "Edit32",
        Label1 = "Label1",
        Label2 = "Label2",
        Label3 = "Label3",
        Label4 = "Label4",
        Label5 = "Label5",
        Label6 = "Label6",
        Label7 = "Label7",
        V_Total_Cases_v1 = "V_Total_Cases_v1",
        Label9 = "Label9",
        V_Packed_Cases_v1 = "V_Packed_Cases_v1",
        Label11 = "Label11",
        Edit12 = "Edit12",
        Label13 = "Label13",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column15',
        'Column16',
        'Column17',
        'Column18',
        'Column19',
        'Column20',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get WRK_CROF_PCNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CROF_PCNO);
    }

    get Edit27(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit27);
    }

    get PCS_DATA_PCS_APDT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_APDT);
    }

    get PCS_DATA_PCS_APTM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_APTM);
    }

    get PCS_DATA_PCS_LTNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_LTNO);
    }

    get Edit28(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit28);
    }

    get PCS_DATA_PCS_PLDT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_PLDT);
    }

    get PCS_DATA_PCS_PLTM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_PLTM);
    }

    get PCS_DATA_PCS_CNNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_CNNO);
    }

    get Edit29(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit29);
    }

    get PCS_DATA_PCS_PPDT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_PPDT);
    }

    get PCS_DATA_PCS_PPTM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_PPTM);
    }

    get PCS_DATA_PCS_CSNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_CSNO);
    }

    get Edit30(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit30);
    }

    get PCS_DATA_PCS_LBDT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_LBDT);
    }

    get PCS_DATA_PCS_LBTM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_LBTM);
    }

    get PCS_DATA_PCS_CSTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_CSTY);
    }

    get Edit31(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit31);
    }

    get PCS_DATA_PCS_APKD(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_APKD);
    }

    get PCS_DATA_PCS_APKT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_APKT);
    }

    get Edit26(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit26);
    }

    get Edit32(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit32);
    }

    get V_Total_Cases_v1(): FormControl {
        return this.fg.controls[MgControlName.V_Total_Cases_v1] as FormControl;
    }

    get V_Packed_Cases_v1(): FormControl {
        return this.fg.controls[MgControlName.V_Packed_Cases_v1] as FormControl;
    }

    get Edit12(): FormControl {
        return this.fg.controls[MgControlName.Edit12] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}