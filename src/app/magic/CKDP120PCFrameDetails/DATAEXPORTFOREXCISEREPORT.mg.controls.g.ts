import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DATAEXPORTFOREXCISEREPORT = "DATAEXPORTFOREXCISEREPORT",
        Image1 = "Image1",
        Label3 = "Label3",
        Edit4 = "Edit4",
        Edit2 = "Edit2",
        Edit5 = "Edit5",
        Edit6 = "Edit6",
        btnexit = "btnexit",
        Label8 = "Label8",
        Label9 = "Label9",
        PC_No_v = "PC_No_v",
        Label11 = "Label11",
        KDPCHED_PH_DSCD = "KDPCHED_PH_DSCD",
        DSTBMST_DS_DSENAM = "DSTBMST_DS_DSENAM",
        Edit14 = "Edit14",
        Help = "Help",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get PC_No_v(): FormControl {
        return this.fg.controls[MgControlName.PC_No_v] as FormControl;
    }

    get KDPCHED_PH_DSCD(): FormControl {
        return this.fg.controls[MgControlName.KDPCHED_PH_DSCD] as FormControl;
    }

    get DSTBMST_DS_DSENAM(): FormControl {
        return this.fg.controls[MgControlName.DSTBMST_DS_DSENAM] as FormControl;
    }

    get Edit14(): FormControl {
        return this.fg.controls[MgControlName.Edit14] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}