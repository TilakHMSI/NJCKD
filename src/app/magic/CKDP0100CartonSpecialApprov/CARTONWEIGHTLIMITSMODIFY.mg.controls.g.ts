import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CARTONWEIGHTLIMITSMODIFY = "CARTONWEIGHTLIMITSMODIFY",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        btnexit = "btnexit",
        Label7 = "Label7",
        PC_No_v = "PC_No_v",
        Label9 = "Label9",
        KDPCHED_PH_DSCD = "KDPCHED_PH_DSCD",
        DSTBMST_DS_DSENAM = "DSTBMST_DS_DSENAM",
        Label12 = "Label12",
        Lot_No_v = "Lot_No_v",
        Label14 = "Label14",
        PKD_LTID_PKD_MDCD = "PKD_LTID_PKD_MDCD",
        MTOCMST_MTMDN1 = "MTOCMST_MTMDN1",
        PKD_LTID_PKD_MDTY = "PKD_LTID_PKD_MDTY",
        PKD_LTID_PKD_MDOP = "PKD_LTID_PKD_MDOP",
        Label19 = "Label19",
        Container_No_v = "Container_No_v",
        Label21 = "Label21",
        Case_No_v = "Case_No_v",
        Label23 = "Label23",
        Carton_No_v = "Carton_No_v",
        Group26 = "Group26",
        Label30 = "Label30",
        Lower_Limit_v = "Lower_Limit_v",
        Label28 = "Label28",
        Upper_Linit_v = "Upper_Linit_v",
        Group31 = "Group31",
        Label32 = "Label32",
        PCR_DATA_PCR_CRGW = "PCR_DATA_PCR_CRGW",
        Special_Approval_v = "Special_Approval_v",
        Label25 = "Label25",
        Save_v = "Save_v",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get PC_No_v(): FormControl {
        return this.fg.controls[MgControlName.PC_No_v] as FormControl;
    }

    get KDPCHED_PH_DSCD(): FormControl {
        return this.fg.controls[MgControlName.KDPCHED_PH_DSCD] as FormControl;
    }

    get DSTBMST_DS_DSENAM(): FormControl {
        return this.fg.controls[MgControlName.DSTBMST_DS_DSENAM] as FormControl;
    }

    get Lot_No_v(): FormControl {
        return this.fg.controls[MgControlName.Lot_No_v] as FormControl;
    }

    get PKD_LTID_PKD_MDCD(): FormControl {
        return this.fg.controls[MgControlName.PKD_LTID_PKD_MDCD] as FormControl;
    }

    get MTOCMST_MTMDN1(): FormControl {
        return this.fg.controls[MgControlName.MTOCMST_MTMDN1] as FormControl;
    }

    get PKD_LTID_PKD_MDTY(): FormControl {
        return this.fg.controls[MgControlName.PKD_LTID_PKD_MDTY] as FormControl;
    }

    get PKD_LTID_PKD_MDOP(): FormControl {
        return this.fg.controls[MgControlName.PKD_LTID_PKD_MDOP] as FormControl;
    }

    get Container_No_v(): FormControl {
        return this.fg.controls[MgControlName.Container_No_v] as FormControl;
    }

    get Case_No_v(): FormControl {
        return this.fg.controls[MgControlName.Case_No_v] as FormControl;
    }

    get Carton_No_v(): FormControl {
        return this.fg.controls[MgControlName.Carton_No_v] as FormControl;
    }

    get Lower_Limit_v(): FormControl {
        return this.fg.controls[MgControlName.Lower_Limit_v] as FormControl;
    }

    get Upper_Linit_v(): FormControl {
        return this.fg.controls[MgControlName.Upper_Linit_v] as FormControl;
    }

    get PCR_DATA_PCR_CRGW(): FormControl {
        return this.fg.controls[MgControlName.PCR_DATA_PCR_CRGW] as FormControl;
    }

    get Special_Approval_v(): FormControl {
        return this.fg.controls[MgControlName.Special_Approval_v] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}