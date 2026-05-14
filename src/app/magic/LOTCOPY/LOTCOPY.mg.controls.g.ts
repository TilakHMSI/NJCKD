import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LOTCOPY = "LOTCOPY",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit3 = "Edit3",
        Label4 = "Label4",
        btnexit = "btnexit",
        Label5 = "Label5",
        v_Lot_No_Copy_From = "v_Lot_No_Copy_From",
        Label7 = "Label7",
        LOT_MAST_LOT_MDCD = "LOT_MAST_LOT_MDCD",
        Label9 = "Label9",
        v_Lot_No_Copy_To = "v_Lot_No_Copy_To",
        Label11 = "Label11",
        V_v_Model_To_Copy = "V_v_Model_To_Copy",
        btnSave = "btnSave",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get v_Lot_No_Copy_From(): FormControl {
        return this.fg.controls[MgControlName.v_Lot_No_Copy_From] as FormControl;
    }

    get LOT_MAST_LOT_MDCD(): FormControl {
        return this.fg.controls[MgControlName.LOT_MAST_LOT_MDCD] as FormControl;
    }

    get v_Lot_No_Copy_To(): FormControl {
        return this.fg.controls[MgControlName.v_Lot_No_Copy_To] as FormControl;
    }

    get V_v_Model_To_Copy(): FormControl {
        return this.fg.controls[MgControlName.V_v_Model_To_Copy] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}