import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDMAINMENU = "CKDMAINMENU",
        Label2 = "Label2",
        V_Bom_User_v = "V_Bom_User_v",
        Edit1 = "Edit1",
        Label6 = "Label6",
        V_Prd_User_v = "V_Prd_User_v",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        Edit8 = "Edit8",
        Label9 = "Label9",
        V_CKD_User_v = "V_CKD_User_v",
        Label11 = "Label11",
        Edit12 = "Edit12",
        btn_1_Master_Menu_v = "btn_1_Master_Menu_v",
        btn_2_Packing_Master_Menu_v = "btn_2_Packing_Master_Menu_v",
        btn_3_Packing_Data_Generation = "btn_3_Packing_Data_Generation",
        btn_4_Packing_List_Print = "btn_4_Packing_List_Print",
        btn_5_Label_Print = "btn_5_Label_Print",
        btn_6_Packing_Completion_v = "btn_6_Packing_Completion_v",
        btn_7_SKID_Menu_v = "btn_7_SKID_Menu_v",
        btn_8_Reports_Menu_v = "btn_8_Reports_Menu_v",
        btn_9_Import_PC_Detail_v = "btn_9_Import_PC_Detail_v",
        btnexit = "btnexit",
        Label13 = "Label13",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_Bom_User_v(): FormControl {
        return this.fg.controls[MgControlName.V_Bom_User_v] as FormControl;
    }

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get V_Prd_User_v(): FormControl {
        return this.fg.controls[MgControlName.V_Prd_User_v] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit8(): FormControl {
        return this.fg.controls[MgControlName.Edit8] as FormControl;
    }

    get V_CKD_User_v(): FormControl {
        return this.fg.controls[MgControlName.V_CKD_User_v] as FormControl;
    }

    get Edit12(): FormControl {
        return this.fg.controls[MgControlName.Edit12] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}