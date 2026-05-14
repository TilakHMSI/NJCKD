import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MASTERMAINTENANCEMENU = "MASTERMAINTENANCEMENU",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        btnexit = "btnexit",
        btn_1_Container_Master_v = "btn_1_Container_Master_v",
        btn_2_Case_Master_v = "btn_2_Case_Master_v",
        btn_3_PM_Type_v = "btn_3_PM_Type_v",
        btn_4_PM_Master_v = "btn_4_PM_Master_v",
        btn_5_Packing_Station_Master_v = "btn_5_Packing_Station_Master_v",
        btn_6_CKD_PartsMaster_v = "btn_6_CKD_PartsMaster_v",
        btn_6_CKD_Sectioin_Master_v = "btn_6_CKD_Sectioin_Master_v",
        btn_8_CKD_Mapping_Master = "btn_8_CKD_Mapping_Master",
        btn_8_CKD_COLOUR_MASTER_0001 = "btn_8_CKD_COLOUR_MASTER_0001",
        btn_8_CKD_Parameters_v = "btn_8_CKD_Parameters_v",
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