import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LABELPRINTMENU = "LABELPRINTMENU",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        btnexit = "btnexit",
        Label6 = "Label6",
        btn_1_Carton_Label_Print_v = "btn_1_Carton_Label_Print_v",
        btn_2_Case_Label_Print_v = "btn_2_Case_Label_Print_v",
        btn_3_Case_Part__Engine_List_v = "btn_3_Case_Part__Engine_List_v",
        btn_4_Carton_Label_Print_A4_v = "btn_4_Carton_Label_Print_A4_v",
        btn_5_Container_Label_Print_v = "btn_5_Container_Label_Print_v",
        btn_6_Case_Label_Print_v_0001 = "btn_6_Case_Label_Print_v_0001",
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