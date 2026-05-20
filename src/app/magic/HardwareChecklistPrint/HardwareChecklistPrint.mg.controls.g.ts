import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    HardwareChecklistPrint = "HardwareChecklistPrint",
        Edit2 = "Edit2",
        btnexit = "btnexit",
        Label2 = "Label2",
        v_PCNo = "v_PCNo",
        vFileName = "vFileName",
        vBlob64base = "vBlob64base",
        v_Exec = "v_Exec",
        v_LblPrn = "v_LblPrn",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get v_PCNo(): FormControl {
        return this.fg.controls[MgControlName.v_PCNo] as FormControl;
    }

    get vFileName(): FormControl {
        return this.fg.controls[MgControlName.vFileName] as FormControl;
    }

    get vBlob64base(): FormControl {
        return this.fg.controls[MgControlName.vBlob64base] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}