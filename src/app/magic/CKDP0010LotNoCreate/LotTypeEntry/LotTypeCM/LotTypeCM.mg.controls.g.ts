import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LotTypeCM = "LotTypeCM",
        btnexit = "btnexit",
        Label20 = "Label20",
        KDPM_LOT_ID = "KDPM_LOT_ID",
        Label21 = "Label21",
        KDPCMODLOT_KDPM_MODEL = "KDPCMODLOT_KDPM_MODEL",
        MTOCMST_MTMDN1 = "MTOCMST_MTMDN1",
        Label22 = "Label22",
        KDPCMODLOT_KDPM_TYPE = "KDPCMODLOT_KDPM_TYPE",
        Label23 = "Label23",
        KDPCMODLOT_KDPM_OPT = "KDPCMODLOT_KDPM_OPT",
        Label24 = "Label24",
        KDPCMODLOT_KDPM_QTY = "KDPCMODLOT_KDPM_QTY",
        btnSave = "btnSave",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get KDPM_LOT_ID(): FormControl {
        return this.fg.controls[MgControlName.KDPM_LOT_ID] as FormControl;
    }

    get KDPCMODLOT_KDPM_MODEL(): FormControl {
        return this.fg.controls[MgControlName.KDPCMODLOT_KDPM_MODEL] as FormControl;
    }

    get MTOCMST_MTMDN1(): FormControl {
        return this.fg.controls[MgControlName.MTOCMST_MTMDN1] as FormControl;
    }

    get KDPCMODLOT_KDPM_TYPE(): FormControl {
        return this.fg.controls[MgControlName.KDPCMODLOT_KDPM_TYPE] as FormControl;
    }

    get KDPCMODLOT_KDPM_OPT(): FormControl {
        return this.fg.controls[MgControlName.KDPCMODLOT_KDPM_OPT] as FormControl;
    }

    get KDPCMODLOT_KDPM_QTY(): FormControl {
        return this.fg.controls[MgControlName.KDPCMODLOT_KDPM_QTY] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}