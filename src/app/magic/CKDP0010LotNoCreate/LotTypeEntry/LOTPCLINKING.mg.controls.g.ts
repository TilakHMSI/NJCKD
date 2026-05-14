import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LOTPCLINKING = "LOTPCLINKING",
        Table2 = "Table2",
        Column3 = "Column3",
        KDPM_LOT_ID = "KDPM_LOT_ID",
        Column4 = "Column4",
        KDPCMODLOT_KDPM_MODEL = "KDPCMODLOT_KDPM_MODEL",
        Column5 = "Column5",
        MTOCMST_MTMDN1 = "MTOCMST_MTMDN1",
        Column6 = "Column6",
        KDPCMODLOT_KDPM_TYPE = "KDPCMODLOT_KDPM_TYPE",
        Column7 = "Column7",
        KDPCMODLOT_KDPM_OPT = "KDPCMODLOT_KDPM_OPT",
        Column8 = "Column8",
        KDPCMODLOT_KDPM_QTY = "KDPCMODLOT_KDPM_QTY",
        Create_Button_v1 = "Create_Button_v1",
        Cancel_Button_v1 = "Cancel_Button_v1",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get KDPM_LOT_ID(): FormControl {
        return this.getTableChildFormControl(MgControlName.KDPM_LOT_ID);
    }

    get KDPCMODLOT_KDPM_MODEL(): FormControl {
        return this.getTableChildFormControl(MgControlName.KDPCMODLOT_KDPM_MODEL);
    }

    get MTOCMST_MTMDN1(): FormControl {
        return this.getTableChildFormControl(MgControlName.MTOCMST_MTMDN1);
    }

    get KDPCMODLOT_KDPM_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.KDPCMODLOT_KDPM_TYPE);
    }

    get KDPCMODLOT_KDPM_OPT(): FormControl {
        return this.getTableChildFormControl(MgControlName.KDPCMODLOT_KDPM_OPT);
    }

    get KDPCMODLOT_KDPM_QTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.KDPCMODLOT_KDPM_QTY);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}