import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PARTSDETAILS = "PARTSDETAILS",
        Label2 = "Label2",
        V_Lot_Id_v = "V_Lot_Id_v",
        Label4 = "Label4",
        WRK_CONT_WRK_CONT_CNCD = "WRK_CONT_WRK_CONT_CNCD",
        Label6 = "Label6",
        WRK_CASE_WRK_CASE_CSCD = "WRK_CASE_WRK_CASE_CSCD",
        Label8 = "Label8",
        WRK_CART_WRK_CART_CRCD = "WRK_CART_WRK_CART_CRCD",
        Edit1 = "Edit1",
        Edit10 = "Edit10",
        Edit11 = "Edit11",
        Edit12 = "Edit12",
        Label13 = "Label13",
        Edit14 = "Edit14",
        Label15 = "Label15",
        Table16 = "Table16",
        Column17 = "Column17",
        WRK_PART_PART = "WRK_PART_PART",
        Column18 = "Column18",
        PT_NAM = "PT_NAM",
        Column19 = "Column19",
        WRK_PART_WRK_PART_PMCD = "WRK_PART_WRK_PART_PMCD",
        Column20 = "Column20",
        VEF_DAT = "VEF_DAT",
        Column21 = "Column21",
        VED_DAT = "VED_DAT",
        Column22 = "Column22",
        CKD_PART_MAST_PRT_WGT = "CKD_PART_MAST_PRT_WGT",
        Column23 = "Column23",
        WRK_PART_PQTY = "WRK_PART_PQTY",
        Column24 = "Column24",
        WRK_PART_EXPCS = "WRK_PART_EXPCS",
        Column25 = "Column25",
        WRK_PART_COLOR = "WRK_PART_COLOR",
        Column26 = "Column26",
        WRK_PART_FRAME_FLAG = "WRK_PART_FRAME_FLAG",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column17',
        'Column18',
        'Column19',
        'Column20',
        'Column21',
        'Column22',
        'Column23',
        'Column24',
        'Column25',
        'Column26',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_Lot_Id_v(): FormControl {
        return this.fg.controls[MgControlName.V_Lot_Id_v] as FormControl;
    }

    get WRK_CONT_WRK_CONT_CNCD(): FormControl {
        return this.fg.controls[MgControlName.WRK_CONT_WRK_CONT_CNCD] as FormControl;
    }

    get WRK_CASE_WRK_CASE_CSCD(): FormControl {
        return this.fg.controls[MgControlName.WRK_CASE_WRK_CASE_CSCD] as FormControl;
    }

    get WRK_CART_WRK_CART_CRCD(): FormControl {
        return this.fg.controls[MgControlName.WRK_CART_WRK_CART_CRCD] as FormControl;
    }

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get Edit10(): FormControl {
        return this.fg.controls[MgControlName.Edit10] as FormControl;
    }

    get Edit11(): FormControl {
        return this.fg.controls[MgControlName.Edit11] as FormControl;
    }

    get Edit12(): FormControl {
        return this.fg.controls[MgControlName.Edit12] as FormControl;
    }

    get Edit14(): FormControl {
        return this.fg.controls[MgControlName.Edit14] as FormControl;
    }

    get WRK_PART_PART(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PART_PART);
    }

    get PT_NAM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PT_NAM);
    }

    get WRK_PART_WRK_PART_PMCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PART_WRK_PART_PMCD);
    }

    get VEF_DAT(): FormControl {
        return this.getTableChildFormControl(MgControlName.VEF_DAT);
    }

    get VED_DAT(): FormControl {
        return this.getTableChildFormControl(MgControlName.VED_DAT);
    }

    get CKD_PART_MAST_PRT_WGT(): FormControl {
        return this.getTableChildFormControl(MgControlName.CKD_PART_MAST_PRT_WGT);
    }

    get WRK_PART_PQTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PART_PQTY);
    }

    get WRK_PART_EXPCS(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PART_EXPCS);
    }

    get WRK_PART_COLOR(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PART_COLOR);
    }

    get WRK_PART_FRAME_FLAG(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PART_FRAME_FLAG);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}