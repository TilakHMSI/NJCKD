import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SELECTPURCHASECONTRACTLOT = "SELECTPURCHASECONTRACTLOT",
        Edit1 = "Edit1",
        Table3 = "Table3",
        Column4 = "Column4",
        WRK_PKLS_SLFL = "WRK_PKLS_SLFL",
        Column5 = "Column5",
        WRK_PKLS_WRK_PKLS_PCNO = "WRK_PKLS_WRK_PKLS_PCNO",
        Column6 = "Column6",
        WRK_PKLS_WRK_PKLS_LTNO = "WRK_PKLS_WRK_PKLS_LTNO",
        Column7 = "Column7",
        PKD_LTID_PKD_MDCD = "PKD_LTID_PKD_MDCD",
        Column8 = "Column8",
        KDPCHED_PH_DSCD = "KDPCHED_PH_DSCD",
        Column9 = "Column9",
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
        'Column8',
        'Column9',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get WRK_PKLS_SLFL(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKLS_SLFL);
    }

    get WRK_PKLS_WRK_PKLS_PCNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKLS_WRK_PKLS_PCNO);
    }

    get WRK_PKLS_WRK_PKLS_LTNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKLS_WRK_PKLS_LTNO);
    }

    get PKD_LTID_PKD_MDCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.PKD_LTID_PKD_MDCD);
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