import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PACKINGCOMPLETIONMENU = "PACKINGCOMPLETIONMENU",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        btnexit = "btnexit",
        Label6 = "Label6",
        btn_1_Carton_Packing_v = "btn_1_Carton_Packing_v",
        btn_2_Carton_Pack_in_Case_v = "btn_2_Carton_Pack_in_Case_v",
        btn_3_Case_Packing_v = "btn_3_Case_Packing_v",
        btn_4_Carton_Special_Approval_v = "btn_4_Carton_Special_Approval_v",
        btn_5_TransferCaseOff2Manesar_v = "btn_5_TransferCaseOff2Manesar_v",
        btn_5_View_Print_GatePass_v = "btn_5_View_Print_GatePass_v",
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