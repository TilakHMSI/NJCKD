import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PURCHASECONTRACTLOTLIST = "PURCHASECONTRACTLOTLIST",
        btnexit = "btnexit",
        Edit1 = "Edit1",
        Table2 = "Table2",
        Column3 = "Column3",
        PKD_LTID_PKD_LTNO = "PKD_LTID_PKD_LTNO",
        Column4 = "Column4",
        PKD_LTID_PKD_MDCD = "PKD_LTID_PKD_MDCD",
        Column5 = "Column5",
        PKD_LTID_PKD_MDTY = "PKD_LTID_PKD_MDTY",
        Column6 = "Column6",
        PKD_LTID_PKD_MDOP = "PKD_LTID_PKD_MDOP",
        Column7 = "Column7",
        MTOCMST_MTMDN1 = "MTOCMST_MTMDN1",
        Column8 = "Column8",
        PKD_LTID_PKD_LTRF = "PKD_LTID_PKD_LTRF",
        Column9 = "Column9",
        Edit16 = "Edit16",
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
        'Column9',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get PKD_LTID_PKD_LTNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PKD_LTID_PKD_LTNO);
    }

    get PKD_LTID_PKD_MDCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.PKD_LTID_PKD_MDCD);
    }

    get PKD_LTID_PKD_MDTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.PKD_LTID_PKD_MDTY);
    }

    get PKD_LTID_PKD_MDOP(): FormControl {
        return this.getTableChildFormControl(MgControlName.PKD_LTID_PKD_MDOP);
    }

    get MTOCMST_MTMDN1(): FormControl {
        return this.getTableChildFormControl(MgControlName.MTOCMST_MTMDN1);
    }

    get PKD_LTID_PKD_LTRF(): FormControl {
        return this.getTableChildFormControl(MgControlName.PKD_LTID_PKD_LTRF);
    }

    get Edit16(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit16);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}