import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DateEngineDetails = "DateEngineDetails",
        Edit2 = "Edit2",
        btnexit = "btnexit",
        Label4 = "Label4",
        F_Date = "F_Date",
        Label6 = "Label6",
        T_Date = "T_Date",
        vFileName = "vFileName",
        vBlob64base = "vBlob64base",
        btnView = "btnView",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get F_Date(): FormControl {
        return this.fg.controls[MgControlName.F_Date] as FormControl;
    }

    get T_Date(): FormControl {
        return this.fg.controls[MgControlName.T_Date] as FormControl;
    }

    get vFileName(): FormControl {
        return this.fg.controls[MgControlName.vFileName] as FormControl;
    }

    get vBlob64base(): FormControl {
        return this.fg.controls[MgControlName.vBlob64base] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}