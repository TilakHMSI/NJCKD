import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PACKINGDATAMENU = "PACKINGDATAMENU",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        btnexit = "btnexit",
        Label6 = "Label6",
        btn_1_PC_Lot_Generation_v = "btn_1_PC_Lot_Generation_v",
        btn_2_Packing_Data_Generation_v = "btn_2_Packing_Data_Generation_v",
        btn_3_Packing_Data_Inquriy_v = "btn_3_Packing_Data_Inquriy_v",
        btn_4_Case_Packing_Schedule_Entrv = "btn_4_Case_Packing_Schedule_Entrv",
        btn_5_Case_Packing_Approval_v = "btn_5_Case_Packing_Approval_v",
        btn_6_DCN_Updation_v = "btn_6_DCN_Updation_v",
        btn_7_Bangladesh_Lot_Scanning_v = "btn_7_Bangladesh_Lot_Scanning_v",
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