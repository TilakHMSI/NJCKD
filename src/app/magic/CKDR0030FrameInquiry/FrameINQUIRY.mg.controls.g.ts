import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FrameINQUIRY = "FrameINQUIRY",
        Image1 = "Image1",
        Edit1 = "Edit1",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Display_Type_v = "Display_Type_v",
        Edit4 = "Edit4",
        btnexit = "btnexit",
        Label8 = "Label8",
        PC_No_v = "PC_No_v",
        Label10 = "Label10",
        Lot_No_v = "Lot_No_v",
        Label12 = "Label12",
        Engine1_v = "Engine1_v",
        Label14 = "Label14",
        Engine2_v = "Engine2_v",
        btnView = "btnView",
        Label16 = "Label16",
        KDPCHED_PH_DSCD = "KDPCHED_PH_DSCD",
        DSTBMST_DS_DSENAM = "DSTBMST_DS_DSENAM",
        Label19 = "Label19",
        PKD_LTID_PKD_MDCD = "PKD_LTID_PKD_MDCD",
        MTOCMST_MTMDN1 = "MTOCMST_MTMDN1",
        PKD_LTID_PKD_MDTY = "PKD_LTID_PKD_MDTY",
        PKD_LTID_PKD_MDOP = "PKD_LTID_PKD_MDOP",
        FrameData = "FrameData",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Display_Type_v(): FormControl {
        return this.fg.controls[MgControlName.Display_Type_v] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get PC_No_v(): FormControl {
        return this.fg.controls[MgControlName.PC_No_v] as FormControl;
    }

    get Lot_No_v(): FormControl {
        return this.fg.controls[MgControlName.Lot_No_v] as FormControl;
    }

    get Engine1_v(): FormControl {
        return this.fg.controls[MgControlName.Engine1_v] as FormControl;
    }

    get Engine2_v(): FormControl {
        return this.fg.controls[MgControlName.Engine2_v] as FormControl;
    }

    get KDPCHED_PH_DSCD(): FormControl {
        return this.fg.controls[MgControlName.KDPCHED_PH_DSCD] as FormControl;
    }

    get DSTBMST_DS_DSENAM(): FormControl {
        return this.fg.controls[MgControlName.DSTBMST_DS_DSENAM] as FormControl;
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

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}