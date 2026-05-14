import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PURCHASECONTRACTLIST = "PURCHASECONTRACTLIST",
        btnexit = "btnexit",
        Edit1 = "Edit1",
        Table2 = "Table2",
        Column3 = "Column3",
        WRK_PCNO_WRK_PCNO_PCNO = "WRK_PCNO_WRK_PCNO_PCNO",
        Column4 = "Column4",
        KDPCHED_PH_DSCD = "KDPCHED_PH_DSCD",
        Column5 = "Column5",
        DSTBMST_DS_DSENAM = "DSTBMST_DS_DSENAM",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get WRK_PCNO_WRK_PCNO_PCNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PCNO_WRK_PCNO_PCNO);
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