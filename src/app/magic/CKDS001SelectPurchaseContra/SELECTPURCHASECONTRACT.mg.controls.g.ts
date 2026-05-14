import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SELECTPURCHASECONTRACT = "SELECTPURCHASECONTRACT",
        Edit1 = "Edit1",
        Table3 = "Table3",
        Column4 = "Column4",
        WRK_PCNO_SLFL = "WRK_PCNO_SLFL",
        Column5 = "Column5",
        WRK_PCNO_WRK_PCNO_PCNO = "WRK_PCNO_WRK_PCNO_PCNO",
        Column6 = "Column6",
        KDPCHED_PH_DSCD = "KDPCHED_PH_DSCD",
        Column7 = "Column7",
        DSTBMST_DS_DSENAM = "DSTBMST_DS_DSENAM",
        Ok_Button_v = "Ok_Button_v",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column4',
        'Column5',
        'Column6',
        'Column7',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get WRK_PCNO_SLFL(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PCNO_SLFL);
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