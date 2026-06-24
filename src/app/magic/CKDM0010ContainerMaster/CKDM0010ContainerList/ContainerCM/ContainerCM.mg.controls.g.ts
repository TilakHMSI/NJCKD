import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ContainerCM = "ContainerCM",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        CNT_CODE = "CNT_CODE",
        CNT_DESC = "CNT_DESC",
        CNT_LENG = "CNT_LENG",
        CNT_HEIG = "CNT_HEIG",
        CNT_WIDT = "CNT_WIDT",
        CNT_WEIG = "CNT_WEIG",
        btnSave = "btnSave",
        Label6 = "Label6",
        btnexit = "btnexit",
        Label22="Label22"
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

    get CNT_CODE(): FormControl {
        return this.fg.controls[MgControlName.CNT_CODE] as FormControl;
    }

    get CNT_DESC(): FormControl {
        return this.fg.controls[MgControlName.CNT_DESC] as FormControl;
    }

    get CNT_LENG(): FormControl {
        return this.fg.controls[MgControlName.CNT_LENG] as FormControl;
    }

    get CNT_HEIG(): FormControl {
        return this.fg.controls[MgControlName.CNT_HEIG] as FormControl;
    }

    get CNT_WIDT(): FormControl {
        return this.fg.controls[MgControlName.CNT_WIDT] as FormControl;
    }

    get CNT_WEIG(): FormControl {
        return this.fg.controls[MgControlName.CNT_WEIG] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}