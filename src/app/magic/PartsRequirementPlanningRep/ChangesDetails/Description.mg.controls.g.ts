import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Description = "Description",
        btnexit = "btnexit",
        Label1 = "Label1",
        Label2 = "Label2",
        V_V_DESC1 = "V_V_DESC1",
        V_V_DATE1 = "V_V_DATE1",
        V_V_CHANGED_BY1 = "V_V_CHANGED_BY1",
        Label6 = "Label6",
        V_V_DESC2 = "V_V_DESC2",
        V_V_DATE2 = "V_V_DATE2",
        V_V_CHANGED_BY2 = "V_V_CHANGED_BY2",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_V_DESC1(): FormControl {
        return this.fg.controls[MgControlName.V_V_DESC1] as FormControl;
    }

    get V_V_DATE1(): FormControl {
        return this.fg.controls[MgControlName.V_V_DATE1] as FormControl;
    }

    get V_V_CHANGED_BY1(): FormControl {
        return this.fg.controls[MgControlName.V_V_CHANGED_BY1] as FormControl;
    }

    get V_V_DESC2(): FormControl {
        return this.fg.controls[MgControlName.V_V_DESC2] as FormControl;
    }

    get V_V_DATE2(): FormControl {
        return this.fg.controls[MgControlName.V_V_DATE2] as FormControl;
    }

    get V_V_CHANGED_BY2(): FormControl {
        return this.fg.controls[MgControlName.V_V_CHANGED_BY2] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}