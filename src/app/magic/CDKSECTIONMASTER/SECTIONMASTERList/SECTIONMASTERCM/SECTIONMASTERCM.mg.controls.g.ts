import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SECTIONMASTERCM = "SECTIONMASTERCM",
    btnexit = "btnexit",
    Label2 = "Label2",
    SEC_CD = "SEC_CD",
    Label4 = "Label4",
    SEC_DESC = "SEC_DESC",
    Label6 = "Label6",
    Reqprn = "Reqprn",
    Desc = "Desc",
    v_SaveExit = "v_SaveExit",
    Label22 = "Label22",
}
export enum MgCustomProperties { }
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) { }

    get SEC_CD(): FormControl {
        return this.fg.controls[MgControlName.SEC_CD] as FormControl;
    }

    get SEC_DESC(): FormControl {
        return this.fg.controls[MgControlName.SEC_DESC] as FormControl;
    }

    get Reqprn(): FormControl {
        return this.fg.controls[MgControlName.Reqprn] as FormControl;
    }

    get Desc(): FormControl {
        return this.fg.controls[MgControlName.Desc] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}