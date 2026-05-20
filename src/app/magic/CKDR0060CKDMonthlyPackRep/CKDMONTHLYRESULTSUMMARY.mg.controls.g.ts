import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDMONTHLYRESULTSUMMARY = "CKDMONTHLYRESULTSUMMARY",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        btnexit = "btnexit",
        Label7 = "Label7",
        Label8 = "Label8",
        Month_v = "Month_v",
        Edit10 = "Edit10",
        btnView = "btnView",
        vFileName = "vFileName",
        vBlob64base = "vBlob64base",
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

    get Month_v(): FormControl {
        return this.fg.controls[MgControlName.Month_v] as FormControl;
    }

    get Edit10(): FormControl {
        return this.fg.controls[MgControlName.Edit10] as FormControl;
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