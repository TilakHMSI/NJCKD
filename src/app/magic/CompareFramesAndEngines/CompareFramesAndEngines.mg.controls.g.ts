import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CompareFramesAndEngines = "CompareFramesAndEngines",
        Edit1 = "Edit1",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Label4 = "Label4",
        Label5 = "Label5",
        Label8 = "Label8",
        V_PCNO = "V_PCNO",
        KDPCHED_PH_DSCD = "KDPCHED_PH_DSCD",
        CHECK_PC_MARK_CHK_MDCD = "CHECK_PC_MARK_CHK_MDCD",
        DSTBMST_DS_DSENAM = "DSTBMST_DS_DSENAM",
        CHECK_PC_MARK_CHK_MDTY = "CHECK_PC_MARK_CHK_MDTY",
        CHECK_PC_MARK_CHK_MDOP = "CHECK_PC_MARK_CHK_MDOP",
        Label14 = "Label14",
        KDPCHED_PH_TLQY = "KDPCHED_PH_TLQY",
        V_EFM = "V_EFM",
        V_V_SCANNING_MESSAGE = "V_V_SCANNING_MESSAGE",
        V_V_COUNT_1 = "V_V_COUNT_1",
        V_FRAMEENGINE_No = "V_FRAMEENGINE_No",
        Scanned_FrameEngine_View = "Scanned_FrameEngine_View",
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

    get V_PCNO(): FormControl {
        return this.fg.controls[MgControlName.V_PCNO] as FormControl;
    }

    get KDPCHED_PH_DSCD(): FormControl {
        return this.fg.controls[MgControlName.KDPCHED_PH_DSCD] as FormControl;
    }

    get CHECK_PC_MARK_CHK_MDCD(): FormControl {
        return this.fg.controls[MgControlName.CHECK_PC_MARK_CHK_MDCD] as FormControl;
    }

    get DSTBMST_DS_DSENAM(): FormControl {
        return this.fg.controls[MgControlName.DSTBMST_DS_DSENAM] as FormControl;
    }

    get CHECK_PC_MARK_CHK_MDTY(): FormControl {
        return this.fg.controls[MgControlName.CHECK_PC_MARK_CHK_MDTY] as FormControl;
    }

    get CHECK_PC_MARK_CHK_MDOP(): FormControl {
        return this.fg.controls[MgControlName.CHECK_PC_MARK_CHK_MDOP] as FormControl;
    }

    get KDPCHED_PH_TLQY(): FormControl {
        return this.fg.controls[MgControlName.KDPCHED_PH_TLQY] as FormControl;
    }

    get V_EFM(): FormControl {
        return this.fg.controls[MgControlName.V_EFM] as FormControl;
    }

    get V_V_SCANNING_MESSAGE(): FormControl {
        return this.fg.controls[MgControlName.V_V_SCANNING_MESSAGE] as FormControl;
    }

    get V_V_COUNT_1(): FormControl {
        return this.fg.controls[MgControlName.V_V_COUNT_1] as FormControl;
    }

    get V_FRAMEENGINE_No(): FormControl {
        return this.fg.controls[MgControlName.V_FRAMEENGINE_No] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}