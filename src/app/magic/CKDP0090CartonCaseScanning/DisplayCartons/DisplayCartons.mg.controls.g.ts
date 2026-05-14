import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DisplayCartons = "DisplayCartons",
        Table32 = "Table32",
        Column33 = "Column33",
        WRK_CROF_PCNO = "WRK_CROF_PCNO",
        Edit46 = "Edit46",
        Column34 = "Column34",
        WRK_CROF_WRK_CROF_LTNO = "WRK_CROF_WRK_CROF_LTNO",
        Edit47 = "Edit47",
        PCR_DATA_PCR_CRPD = "PCR_DATA_PCR_CRPD",
        PCR_DATA_PCR_CRPT = "PCR_DATA_PCR_CRPT",
        Column35 = "Column35",
        WRK_CROF_WRK_CROF_CNNO = "WRK_CROF_WRK_CROF_CNNO",
        Edit48 = "Edit48",
        PCR_DATA_PCR_APKD = "PCR_DATA_PCR_APKD",
        PCR_DATA_PCR_APKT = "PCR_DATA_PCR_APKT",
        Column36 = "Column36",
        WRK_CROF_WRK_CROF_CSNO = "WRK_CROF_WRK_CROF_CSNO",
        Edit49 = "Edit49",
        PCR_DATA_PCR_CCDT = "PCR_DATA_PCR_CCDT",
        PCR_DATA_PCR_CCTM = "PCR_DATA_PCR_CCTM",
        Column37 = "Column37",
        WRK_CROF_WRK_CROF_CRNO = "WRK_CROF_WRK_CROF_CRNO",
        Edit50 = "Edit50",
        PCR_DATA_PCR_CRLW = "PCR_DATA_PCR_CRLW",
        PCR_DATA_PCR_CRUW = "PCR_DATA_PCR_CRUW",
        Label60 = "Label60",
        Column38 = "Column38",
        Label39 = "Label39",
        PCR_DATA_PCR_CRTY = "PCR_DATA_PCR_CRTY",
        PCR_DATA_PCR_CRST = "PCR_DATA_PCR_CRST",
        Label1 = "Label1",
        Label2 = "Label2",
        Label3 = "Label3",
        Label4 = "Label4",
        Label5 = "Label5",
        Label6 = "Label6",
        Label15 = "Label15",
        Label7 = "Label7",
        Label16 = "Label16",
        V_Total_Cartons_in_PC_v1 = "V_Total_Cartons_in_PC_v1",
        V_Packed_Cartons_in_PC_v1 = "V_Packed_Cartons_in_PC_v1",
        Label18 = "Label18",
        Edit19 = "Edit19",
        Label9 = "Label9",
        Label20 = "Label20",
        V_Total_Cartons_in_Lot_v1 = "V_Total_Cartons_in_Lot_v1",
        V_Packed_Cartons_in_Lot_v1 = "V_Packed_Cartons_in_Lot_v1",
        Label22 = "Label22",
        Edit23 = "Edit23",
        Label11 = "Label11",
        Label24 = "Label24",
        Total_Cartons_In_Container_v1 = "Total_Cartons_In_Container_v1",
        V_Pack_Cartons_In_Container_v1 = "V_Pack_Cartons_In_Container_v1",
        Label26 = "Label26",
        Edit27 = "Edit27",
        Label28 = "Label28",
        Label13 = "Label13",
        V_Total_Cartons_in_Case_v1 = "V_Total_Cartons_in_Case_v1",
        V_Packed_Carton_in_Case_v1 = "V_Packed_Carton_in_Case_v1",
        Label30 = "Label30",
        Edit31 = "Edit31",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column33',
        'Column34',
        'Column35',
        'Column36',
        'Column37',
        'Column38',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get WRK_CROF_PCNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CROF_PCNO);
    }

    get Edit46(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit46);
    }

    get WRK_CROF_WRK_CROF_LTNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CROF_WRK_CROF_LTNO);
    }

    get Edit47(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit47);
    }

    get PCR_DATA_PCR_CRPD(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_CRPD);
    }

    get PCR_DATA_PCR_CRPT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_CRPT);
    }

    get WRK_CROF_WRK_CROF_CNNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CROF_WRK_CROF_CNNO);
    }

    get Edit48(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit48);
    }

    get PCR_DATA_PCR_APKD(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_APKD);
    }

    get PCR_DATA_PCR_APKT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_APKT);
    }

    get WRK_CROF_WRK_CROF_CSNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CROF_WRK_CROF_CSNO);
    }

    get Edit49(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit49);
    }

    get PCR_DATA_PCR_CCDT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_CCDT);
    }

    get PCR_DATA_PCR_CCTM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_CCTM);
    }

    get WRK_CROF_WRK_CROF_CRNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CROF_WRK_CROF_CRNO);
    }

    get Edit50(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit50);
    }

    get PCR_DATA_PCR_CRLW(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_CRLW);
    }

    get PCR_DATA_PCR_CRUW(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_CRUW);
    }

    get PCR_DATA_PCR_CRTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_CRTY);
    }

    get PCR_DATA_PCR_CRST(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_CRST);
    }

    get V_Total_Cartons_in_PC_v1(): FormControl {
        return this.fg.controls[MgControlName.V_Total_Cartons_in_PC_v1] as FormControl;
    }

    get V_Packed_Cartons_in_PC_v1(): FormControl {
        return this.fg.controls[MgControlName.V_Packed_Cartons_in_PC_v1] as FormControl;
    }

    get Edit19(): FormControl {
        return this.fg.controls[MgControlName.Edit19] as FormControl;
    }

    get V_Total_Cartons_in_Lot_v1(): FormControl {
        return this.fg.controls[MgControlName.V_Total_Cartons_in_Lot_v1] as FormControl;
    }

    get V_Packed_Cartons_in_Lot_v1(): FormControl {
        return this.fg.controls[MgControlName.V_Packed_Cartons_in_Lot_v1] as FormControl;
    }

    get Edit23(): FormControl {
        return this.fg.controls[MgControlName.Edit23] as FormControl;
    }

    get Total_Cartons_In_Container_v1(): FormControl {
        return this.fg.controls[MgControlName.Total_Cartons_In_Container_v1] as FormControl;
    }

    get V_Pack_Cartons_In_Container_v1(): FormControl {
        return this.fg.controls[MgControlName.V_Pack_Cartons_In_Container_v1] as FormControl;
    }

    get Edit27(): FormControl {
        return this.fg.controls[MgControlName.Edit27] as FormControl;
    }

    get V_Total_Cartons_in_Case_v1(): FormControl {
        return this.fg.controls[MgControlName.V_Total_Cartons_in_Case_v1] as FormControl;
    }

    get V_Packed_Carton_in_Case_v1(): FormControl {
        return this.fg.controls[MgControlName.V_Packed_Carton_in_Case_v1] as FormControl;
    }

    get Edit31(): FormControl {
        return this.fg.controls[MgControlName.Edit31] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}