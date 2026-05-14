import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    GetPassword4 = "GetPassword4",
        Label1 = "Label1",
        v_Get_pass = "v_Get_pass",
        v_Ok = "v_Ok",
        v_Cancel = "v_Cancel",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get v_Get_pass(): FormControl {
        return this.fg.controls[MgControlName.v_Get_pass] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}