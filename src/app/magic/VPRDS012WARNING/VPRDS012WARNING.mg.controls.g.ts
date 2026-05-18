import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDS012WARNING = "VPRDS012WARNING",
        Label1 = "Label1",
        Label7 = "Label7",
        Label3 = "Label3",
        V_MESSAGE_P = "V_MESSAGE_P",
        Label5 = "Label5",
        Label6 = "Label6",
        btn_Close = "btn_Close",
        Label2 = "Label2",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_MESSAGE_P(): FormControl {
        return this.fg.controls[MgControlName.V_MESSAGE_P] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}