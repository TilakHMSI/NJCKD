import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PARTSPACKINGMASTERMENU = "PARTSPACKINGMASTERMENU",
        Image1 = "Image1",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        btnexit = "btnexit",
        Label5 = "Label5",
        btn_5_Cancel_All_FramesEnginesv = "btn_5_Cancel_All_FramesEnginesv",
        btn_1_Compare_FramesEngines_v = "btn_1_Compare_FramesEngines_v",
        btn_2_Cancel_Scanned_FrameEnginev = "btn_2_Cancel_Scanned_FrameEnginev",
        btn_3_Report_Scanned_FrameEnginev = "btn_3_Report_Scanned_FrameEnginev",
        btn_4_Cancel_Scanned_FrameEnginev = "btn_4_Cancel_Scanned_FrameEnginev",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}