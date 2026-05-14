import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    HardwareChecklistPrint = "HardwareChecklistPrint",
        Label1 = "Label1",
        btnexit = "btnexit",
        Label2 = "Label2",
        v_PCNo = "v_PCNo",
        v_Exec = "v_Exec",
        v_LblPrn = "v_LblPrn",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get v_PCNo(): FormControl {
        return this.fg.controls[MgControlName.v_PCNo] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}