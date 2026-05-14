import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DateEngineDetails = "DateEngineDetails",
        btnexit = "btnexit",
        Label4 = "Label4",
        F_Date = "F_Date",
        Label6 = "Label6",
        T_Date = "T_Date",
        Ok = "Ok",
        Label2 = "Label2",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get F_Date(): FormControl {
        return this.fg.controls[MgControlName.F_Date] as FormControl;
    }

    get T_Date(): FormControl {
        return this.fg.controls[MgControlName.T_Date] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}