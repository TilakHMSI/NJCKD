import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    REPORTSMENU = "REPORTSMENU",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        Label6 = "Label6",
        btn_1_Excise_Engine_Report_v = "btn_1_Excise_Engine_Report_v",
        btn_1_1Excise_Frame_Report_v = "btn_1_1Excise_Frame_Report_v",
        btn_2_Packing_Engine_Inquiry_v = "btn_2_Packing_Engine_Inquiry_v",
        btn_3_Parts_Requirement_Planing_v = "btn_3_Parts_Requirement_Planing_v",
        btn_4_Carton_Weight_Report_v = "btn_4_Carton_Weight_Report_v",
        btn_5_Daily_Result_Report_v = "btn_5_Daily_Result_Report_v",
        btn_6_Monthly_Result_Summary_v = "btn_6_Monthly_Result_Summary_v",
        btn_7_DCNUpdLotReport_v = "btn_7_DCNUpdLotReport_v",
        btn_8_HWCheckList_v = "btn_8_HWCheckList_v",
        btn_9_Excise_Engine_Report_Date_v = "btn_9_Excise_Engine_Report_Date_v",
        PACKING_FRAME_INQUIRY = "PACKING_FRAME_INQUIRY",
        btnexit = "btnexit",
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

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}