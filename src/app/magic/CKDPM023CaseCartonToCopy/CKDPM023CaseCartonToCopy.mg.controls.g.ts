import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDPM023CaseCartonToCopy = "CKDPM023CaseCartonToCopy",
        Edit1 = "Edit1",
        Case__Carton_No_v = "Case__Carton_No_v",
        btnexit = "btnexit",
        Label3 = "Label3",
        OK_Button_v = "OK_Button_v",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get Case__Carton_No_v(): FormControl {
        return this.fg.controls[MgControlName.Case__Carton_No_v] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}