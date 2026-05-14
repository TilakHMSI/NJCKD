import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PACKINGPLANMENU = "PACKINGPLANMENU",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        btnexit = "btnexit",
        Label6 = "Label6",
        btn_1_Picking_List_v = "btn_1_Picking_List_v",
        btn_2_Inspection_Check_List_v = "btn_2_Inspection_Check_List_v",
        btn_3_Required_PM_Report_v = "btn_3_Required_PM_Report_v",
        btn_4_Packing_Plan_v = "btn_4_Packing_Plan_v",
        btn_5_Case_Packing_Plan_v = "btn_5_Case_Packing_Plan_v",
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