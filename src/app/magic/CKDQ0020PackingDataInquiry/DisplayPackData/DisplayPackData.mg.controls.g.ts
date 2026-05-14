import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DisplayPackData = "DisplayPackData",
        Table7 = "Table7",
        Column8 = "Column8",
        WRK_PAKD_LTNO = "WRK_PAKD_LTNO",
        Column9 = "Column9",
        WRK_PAKD_CNNO = "WRK_PAKD_CNNO",
        Column10 = "Column10",
        WRK_PAKD_CSNO = "WRK_PAKD_CSNO",
        Column11 = "Column11",
        WRK_PAKD_CRNO = "WRK_PAKD_CRNO",
        Column12 = "Column12",
        WRK_PAKD_PART = "WRK_PAKD_PART",
        Column13 = "Column13",
        PART_NAM = "PART_NAM",
        Column14 = "Column14",
        WRK_PAKD_PQTY = "WRK_PAKD_PQTY",
        Column15 = "Column15",
        WRK_COLOR = "WRK_COLOR",
        CEMST_CECLN1 = "CEMST_CECLN1",
        Label1 = "Label1",
        Group2 = "Group2",
        Label3 = "Label3",
        PCN_DATA_PCN_CNTY = "PCN_DATA_PCN_CNTY",
        Label5 = "Label5",
        Edit6 = "Edit6",
        Group25 = "Group25",
        Label26 = "Label26",
        Case_Engine_Details_v1 = "Case_Engine_Details_v1",
        Label27 = "Label27",
        PCS_DATA_PCS_CSTY = "PCS_DATA_PCS_CSTY",
        Label29 = "Label29",
        Edit30 = "Edit30",
        Label31 = "Label31",
        Edit32 = "Edit32",
        Label34 = "Label34",
        Edit33 = "Edit33",
        PCS_DATA_PCS_APDT = "PCS_DATA_PCS_APDT",
        PCS_DATA_PCS_APTM = "PCS_DATA_PCS_APTM",
        Group42 = "Group42",
        Label43 = "Label43",
        Edit44 = "Edit44",
        PCS_DATA_PCS_PLDT = "PCS_DATA_PCS_PLDT",
        PCS_DATA_PCS_PLTM = "PCS_DATA_PCS_PLTM",
        Label47 = "Label47",
        Edit48 = "Edit48",
        PCS_DATA_PCS_PPDT = "PCS_DATA_PCS_PPDT",
        PCS_DATA_PCS_PPTM = "PCS_DATA_PCS_PPTM",
        Label51 = "Label51",
        Edit52 = "Edit52",
        PCS_DATA_PCS_LBDT = "PCS_DATA_PCS_LBDT",
        PCS_DATA_PCS_LBTM = "PCS_DATA_PCS_LBTM",
        Label37 = "Label37",
        Edit38 = "Edit38",
        PCS_DATA_PCS_APKD = "PCS_DATA_PCS_APKD",
        PCS_DATA_PCS_APKT = "PCS_DATA_PCS_APKT",
        Group55 = "Group55",
        Label56 = "Label56",
        Carton_Engine_Details_v1 = "Carton_Engine_Details_v1",
        Label57 = "Label57",
        PCR_DATA_PCR_CRTY = "PCR_DATA_PCR_CRTY",
        Label59 = "Label59",
        Edit60 = "Edit60",
        Edit61 = "Edit61",
        Label62 = "Label62",
        Edit63 = "Edit63",
        Label64 = "Label64",
        PCR_DATA_PCR_CRST = "PCR_DATA_PCR_CRST",
        Label66 = "Label66",
        Edit67 = "Edit67",
        PCR_DATA_PCR_CRPD = "PCR_DATA_PCR_CRPD",
        PCR_DATA_PCR_CRPT = "PCR_DATA_PCR_CRPT",
        Label70 = "Label70",
        Edit71 = "Edit71",
        PCR_DATA_PCR_APKD = "PCR_DATA_PCR_APKD",
        PCR_DATA_PCR_APKT = "PCR_DATA_PCR_APKT",
        Label74 = "Label74",
        Edit75 = "Edit75",
        PCR_DATA_PCR_CCDT = "PCR_DATA_PCR_CCDT",
        PCR_DATA_PCR_CCTM = "PCR_DATA_PCR_CCTM",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column8',
        'Column9',
        'Column10',
        'Column11',
        'Column12',
        'Column13',
        'Column14',
        'Column15',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get WRK_PAKD_LTNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PAKD_LTNO);
    }

    get WRK_PAKD_CNNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PAKD_CNNO);
    }

    get WRK_PAKD_CSNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PAKD_CSNO);
    }

    get WRK_PAKD_CRNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PAKD_CRNO);
    }

    get WRK_PAKD_PART(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PAKD_PART);
    }

    get PART_NAM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PART_NAM);
    }

    get WRK_PAKD_PQTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PAKD_PQTY);
    }

    get WRK_COLOR(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_COLOR);
    }

    get CEMST_CECLN1(): FormControl {
        return this.getTableChildFormControl(MgControlName.CEMST_CECLN1);
    }

    get PCN_DATA_PCN_CNTY(): FormControl {
        return this.fg.controls[MgControlName.PCN_DATA_PCN_CNTY] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get PCS_DATA_PCS_CSTY(): FormControl {
        return this.fg.controls[MgControlName.PCS_DATA_PCS_CSTY] as FormControl;
    }

    get Edit30(): FormControl {
        return this.fg.controls[MgControlName.Edit30] as FormControl;
    }

    get Edit32(): FormControl {
        return this.fg.controls[MgControlName.Edit32] as FormControl;
    }

    get Edit33(): FormControl {
        return this.fg.controls[MgControlName.Edit33] as FormControl;
    }

    get PCS_DATA_PCS_APDT(): FormControl {
        return this.fg.controls[MgControlName.PCS_DATA_PCS_APDT] as FormControl;
    }

    get PCS_DATA_PCS_APTM(): FormControl {
        return this.fg.controls[MgControlName.PCS_DATA_PCS_APTM] as FormControl;
    }

    get Edit44(): FormControl {
        return this.fg.controls[MgControlName.Edit44] as FormControl;
    }

    get PCS_DATA_PCS_PLDT(): FormControl {
        return this.fg.controls[MgControlName.PCS_DATA_PCS_PLDT] as FormControl;
    }

    get PCS_DATA_PCS_PLTM(): FormControl {
        return this.fg.controls[MgControlName.PCS_DATA_PCS_PLTM] as FormControl;
    }

    get Edit48(): FormControl {
        return this.fg.controls[MgControlName.Edit48] as FormControl;
    }

    get PCS_DATA_PCS_PPDT(): FormControl {
        return this.fg.controls[MgControlName.PCS_DATA_PCS_PPDT] as FormControl;
    }

    get PCS_DATA_PCS_PPTM(): FormControl {
        return this.fg.controls[MgControlName.PCS_DATA_PCS_PPTM] as FormControl;
    }

    get Edit52(): FormControl {
        return this.fg.controls[MgControlName.Edit52] as FormControl;
    }

    get PCS_DATA_PCS_LBDT(): FormControl {
        return this.fg.controls[MgControlName.PCS_DATA_PCS_LBDT] as FormControl;
    }

    get PCS_DATA_PCS_LBTM(): FormControl {
        return this.fg.controls[MgControlName.PCS_DATA_PCS_LBTM] as FormControl;
    }

    get Edit38(): FormControl {
        return this.fg.controls[MgControlName.Edit38] as FormControl;
    }

    get PCS_DATA_PCS_APKD(): FormControl {
        return this.fg.controls[MgControlName.PCS_DATA_PCS_APKD] as FormControl;
    }

    get PCS_DATA_PCS_APKT(): FormControl {
        return this.fg.controls[MgControlName.PCS_DATA_PCS_APKT] as FormControl;
    }

    get PCR_DATA_PCR_CRTY(): FormControl {
        return this.fg.controls[MgControlName.PCR_DATA_PCR_CRTY] as FormControl;
    }

    get Edit60(): FormControl {
        return this.fg.controls[MgControlName.Edit60] as FormControl;
    }

    get Edit61(): FormControl {
        return this.fg.controls[MgControlName.Edit61] as FormControl;
    }

    get Edit63(): FormControl {
        return this.fg.controls[MgControlName.Edit63] as FormControl;
    }

    get PCR_DATA_PCR_CRST(): FormControl {
        return this.fg.controls[MgControlName.PCR_DATA_PCR_CRST] as FormControl;
    }

    get Edit67(): FormControl {
        return this.fg.controls[MgControlName.Edit67] as FormControl;
    }

    get PCR_DATA_PCR_CRPD(): FormControl {
        return this.fg.controls[MgControlName.PCR_DATA_PCR_CRPD] as FormControl;
    }

    get PCR_DATA_PCR_CRPT(): FormControl {
        return this.fg.controls[MgControlName.PCR_DATA_PCR_CRPT] as FormControl;
    }

    get Edit71(): FormControl {
        return this.fg.controls[MgControlName.Edit71] as FormControl;
    }

    get PCR_DATA_PCR_APKD(): FormControl {
        return this.fg.controls[MgControlName.PCR_DATA_PCR_APKD] as FormControl;
    }

    get PCR_DATA_PCR_APKT(): FormControl {
        return this.fg.controls[MgControlName.PCR_DATA_PCR_APKT] as FormControl;
    }

    get Edit75(): FormControl {
        return this.fg.controls[MgControlName.Edit75] as FormControl;
    }

    get PCR_DATA_PCR_CCDT(): FormControl {
        return this.fg.controls[MgControlName.PCR_DATA_PCR_CCDT] as FormControl;
    }

    get PCR_DATA_PCR_CCTM(): FormControl {
        return this.fg.controls[MgControlName.PCR_DATA_PCR_CCTM] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}