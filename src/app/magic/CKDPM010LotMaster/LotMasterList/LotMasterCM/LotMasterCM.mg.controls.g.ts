import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LotMasterCM = "LotMasterCM",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        btnexit = "btnexit",
        LOT_CODE = "LOT_CODE",
        LOT_DESC = "LOT_DESC",
        LOT_MDCD = "LOT_MDCD",
        S1_MTONAME = "S1_MTONAME",
        LOT_MQTY = "LOT_MQTY",
        btnSave = "btnSave",
        Label6 = "Label6",
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

    get LOT_CODE(): FormControl {
        return this.fg.controls[MgControlName.LOT_CODE] as FormControl;
    }

    get LOT_DESC(): FormControl {
        return this.fg.controls[MgControlName.LOT_DESC] as FormControl;
    }

    get LOT_MDCD(): FormControl {
        return this.fg.controls[MgControlName.LOT_MDCD] as FormControl;
    }

    get S1_MTONAME(): FormControl {
        return this.fg.controls[MgControlName.S1_MTONAME] as FormControl;
    }

    get LOT_MQTY(): FormControl {
        return this.fg.controls[MgControlName.LOT_MQTY] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}