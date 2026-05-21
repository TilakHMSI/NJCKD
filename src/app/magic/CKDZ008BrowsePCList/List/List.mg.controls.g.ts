import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    List = "List",
        Table1 = "Table1",
        Column3 = "Column3",
        V_KDPM_PCNO = "V_KDPM_PCNO",
        Column4 = "Column4",
        KDPCHED_PH_DSCD = "KDPCHED_PH_DSCD",
        Column6 = "Column6",
        DSTBMST_DS_DSENAM = "DSTBMST_DS_DSENAM",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column6',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_KDPM_PCNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_KDPM_PCNO);
    }

    get KDPCHED_PH_DSCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.KDPCHED_PH_DSCD);
    }

    get DSTBMST_DS_DSENAM(): FormControl {
        return this.getTableChildFormControl(MgControlName.DSTBMST_DS_DSENAM);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}