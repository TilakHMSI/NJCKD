import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    StatusMessage = "StatusMessage",
        Group1 = "Group1",
        V_v_MRN_Number = "V_v_MRN_Number",
        btn_Exit = "btn_Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_v_MRN_Number(): FormControl {
        return this.fg.controls[MgControlName.V_v_MRN_Number] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}