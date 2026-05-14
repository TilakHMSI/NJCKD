import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    UpdateLotDCNUpdation = "UpdateLotDCNUpdation",
        Edit1 = "Edit1",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Label4 = "Label4",
        Label5 = "Label5",
        v_DC_No = "v_DC_No",
        Label7 = "Label7",
        v_New_Part_No = "v_New_Part_No",
        Label9 = "Label9",
        v_Old_Part_No = "v_Old_Part_No",
        Label11 = "Label11",
        v_Remarks = "v_Remarks",
        v_Update = "v_Update",
        v_Exit = "v_Exit",
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

    get v_DC_No(): FormControl {
        return this.fg.controls[MgControlName.v_DC_No] as FormControl;
    }

    get v_New_Part_No(): FormControl {
        return this.fg.controls[MgControlName.v_New_Part_No] as FormControl;
    }

    get v_Old_Part_No(): FormControl {
        return this.fg.controls[MgControlName.v_Old_Part_No] as FormControl;
    }

    get v_Remarks(): FormControl {
        return this.fg.controls[MgControlName.v_Remarks] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}