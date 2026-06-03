import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LOTGENERATIONFORPURCHASECO = "LOTGENERATIONFORPURCHASECO",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        Option_v = "Option_v",
        Label8 = "Label8",
        Label12 = "Label12",
        PC_No_v = "PC_No_v",
        Label9 = "Label9",
        DSTBMST_DS_DSENAM = "DSTBMST_DS_DSENAM",
        KDPCHED_PH_DSCD = "KDPCHED_PH_DSCD",
        Label11 = "Label11",
        Check_PC_Mark = "Check_PC_Mark",
        btnexit = "btnexit",
        Lot_Type_Entry = "Lot_Type_Entry",
        btnAction = "btnAction",
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

    get Option_v(): FormControl {
        return this.fg.controls[MgControlName.Option_v] as FormControl;
    }

    get PC_No_v(): FormControl {
        return this.fg.controls[MgControlName.PC_No_v] as FormControl;
    }

    get DSTBMST_DS_DSENAM(): FormControl {
        return this.fg.controls[MgControlName.DSTBMST_DS_DSENAM] as FormControl;
    }

    get KDPCHED_PH_DSCD(): FormControl {
        return this.fg.controls[MgControlName.KDPCHED_PH_DSCD] as FormControl;
    }

    get Check_PC_Mark(): FormControl {
        return this.fg.controls[MgControlName.Check_PC_Mark] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}