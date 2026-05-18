import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDS005OKNO = "VPRDS005OKNO",
        V_MESSAGE_P = "V_MESSAGE_P",
        OK_BUTTON = "OK_BUTTON",
        CANCEL_BUTTON = "CANCEL_BUTTON",
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