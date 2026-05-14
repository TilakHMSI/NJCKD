import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CaseCM = "CaseCM",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        CAS_CODE = "CAS_CODE",
        CAS_DESC = "CAS_DESC",
        CAS_LENG = "CAS_LENG",
        CAS_HEIG = "CAS_HEIG",
        CAS_WIDT = "CAS_WIDT",
        CAS_WEIG = "CAS_WEIG",
        btnSave = "btnSave",
        Label6 = "Label6",
        btnexit = "btnexit",
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

    get CAS_CODE(): FormControl {
        return this.fg.controls[MgControlName.CAS_CODE] as FormControl;
    }

    get CAS_DESC(): FormControl {
        return this.fg.controls[MgControlName.CAS_DESC] as FormControl;
    }

    get CAS_LENG(): FormControl {
        return this.fg.controls[MgControlName.CAS_LENG] as FormControl;
    }

    get CAS_HEIG(): FormControl {
        return this.fg.controls[MgControlName.CAS_HEIG] as FormControl;
    }

    get CAS_WIDT(): FormControl {
        return this.fg.controls[MgControlName.CAS_WIDT] as FormControl;
    }

    get CAS_WEIG(): FormControl {
        return this.fg.controls[MgControlName.CAS_WEIG] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}