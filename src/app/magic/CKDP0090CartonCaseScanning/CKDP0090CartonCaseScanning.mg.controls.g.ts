import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDP0090CartonCaseScanning = "CKDP0090CartonCaseScanning",
        Image1 = "Image1",
        Edit4 = "Edit4",
        Edit2 = "Edit2",
        Edit5 = "Edit5",
        btnexit = "btnexit",
        Edit6 = "Edit6",
        DisplayCartons = "DisplayCartons",
        Label7 = "Label7",
        Label9 = "Label9",
        Label18 = "Label18",
        Label31 = "Label31",
        Option_v = "Option_v",
        Label19 = "Label19",
        KDPCHED_PH_DSCD = "KDPCHED_PH_DSCD",
        PC_No_v = "PC_No_v",
        DSTBMST_DS_DSENAM = "DSTBMST_DS_DSENAM",
        Label21 = "Label21",
        Lot_No_v = "Lot_No_v",
        Label8 = "Label8",
        Label23 = "Label23",
        Edit10 = "Edit10",
        Case__Carton_Id_v = "Case__Carton_Id_v",
        Cont_v = "Cont_v",
        Label34 = "Label34",
        Label25 = "Label25",
        Case_v = "Case_v",
        PKD_LTID_PKD_MDCD = "PKD_LTID_PKD_MDCD",
        Label11 = "Label11",
        CC_Carton_Id_v = "CC_Carton_Id_v",
        Case__Carton_Weight_v = "Case__Carton_Weight_v",
        Label12 = "Label12",
        Label27 = "Label27",
        MTOCMST_MTMDN1 = "MTOCMST_MTMDN1",
        Carton_v = "Carton_v",
        V_CC_Carton_No_v = "V_CC_Carton_No_v",
        Label13 = "Label13",
        SKID_v = "SKID_v",
        Label30 = "Label30",
        Option_1_v = "Option_1_v",
        PKD_LTID_PKD_MDTY = "PKD_LTID_PKD_MDTY",
        PKD_LTID_PKD_MDOP = "PKD_LTID_PKD_MDOP",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get Option_v(): FormControl {
        return this.fg.controls[MgControlName.Option_v] as FormControl;
    }

    get KDPCHED_PH_DSCD(): FormControl {
        return this.fg.controls[MgControlName.KDPCHED_PH_DSCD] as FormControl;
    }

    get PC_No_v(): FormControl {
        return this.fg.controls[MgControlName.PC_No_v] as FormControl;
    }

    get DSTBMST_DS_DSENAM(): FormControl {
        return this.fg.controls[MgControlName.DSTBMST_DS_DSENAM] as FormControl;
    }

    get Lot_No_v(): FormControl {
        return this.fg.controls[MgControlName.Lot_No_v] as FormControl;
    }

    get Edit10(): FormControl {
        return this.fg.controls[MgControlName.Edit10] as FormControl;
    }

    get Case__Carton_Id_v(): FormControl {
        return this.fg.controls[MgControlName.Case__Carton_Id_v] as FormControl;
    }

    get Cont_v(): FormControl {
        return this.fg.controls[MgControlName.Cont_v] as FormControl;
    }

    get Case_v(): FormControl {
        return this.fg.controls[MgControlName.Case_v] as FormControl;
    }

    get PKD_LTID_PKD_MDCD(): FormControl {
        return this.fg.controls[MgControlName.PKD_LTID_PKD_MDCD] as FormControl;
    }

    get CC_Carton_Id_v(): FormControl {
        return this.fg.controls[MgControlName.CC_Carton_Id_v] as FormControl;
    }

    get Case__Carton_Weight_v(): FormControl {
        return this.fg.controls[MgControlName.Case__Carton_Weight_v] as FormControl;
    }

    get MTOCMST_MTMDN1(): FormControl {
        return this.fg.controls[MgControlName.MTOCMST_MTMDN1] as FormControl;
    }

    get Carton_v(): FormControl {
        return this.fg.controls[MgControlName.Carton_v] as FormControl;
    }

    get V_CC_Carton_No_v(): FormControl {
        return this.fg.controls[MgControlName.V_CC_Carton_No_v] as FormControl;
    }

    get SKID_v(): FormControl {
        return this.fg.controls[MgControlName.SKID_v] as FormControl;
    }

    get Option_1_v(): FormControl {
        return this.fg.controls[MgControlName.Option_1_v] as FormControl;
    }

    get PKD_LTID_PKD_MDTY(): FormControl {
        return this.fg.controls[MgControlName.PKD_LTID_PKD_MDTY] as FormControl;
    }

    get PKD_LTID_PKD_MDOP(): FormControl {
        return this.fg.controls[MgControlName.PKD_LTID_PKD_MDOP] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}