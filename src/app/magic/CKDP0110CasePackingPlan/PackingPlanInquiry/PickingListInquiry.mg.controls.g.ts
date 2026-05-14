import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PickingListInquiry = "PickingListInquiry",
        Table2 = "Table2",
        Column3 = "Column3",
        WRK_PKPL_SLFL = "WRK_PKPL_SLFL",
        Column4 = "Column4",
        WRK_PKPL_WRK_PKPL_PCNO = "WRK_PKPL_WRK_PKPL_PCNO",
        Column5 = "Column5",
        WRK_PKPL_WRK_PKPL_LTNO = "WRK_PKPL_WRK_PKPL_LTNO",
        Column6 = "Column6",
        WRK_PKPL_WRK_PKPL_CNNO = "WRK_PKPL_WRK_PKPL_CNNO",
        Column7 = "Column7",
        WRK_PKPL_WRK_PKPL_CSNO = "WRK_PKPL_WRK_PKPL_CSNO",
        Column8 = "Column8",
        WRK_PKPL_WRK_PKPL_STAN = "WRK_PKPL_WRK_PKPL_STAN",
        Column9 = "Column9",
        WRK_PKPL_WRK_PKPL_CRNO = "WRK_PKPL_WRK_PKPL_CRNO",
        Column10 = "Column10",
        WRK_PKPL_WRK_PKPL_PART = "WRK_PKPL_WRK_PKPL_PART",
        Column11 = "Column11",
        BOMAB44_PT_NAM = "BOMAB44_PT_NAM",
        Column12 = "Column12",
        WRK_PKPL_WRK_PKPL_PQTY = "WRK_PKPL_WRK_PKPL_PQTY",
        Label1 = "Label1",
        PC_Select_v1 = "PC_Select_v1",
        PC__Lot_Select_v1 = "PC__Lot_Select_v1",
        All_Select_v1 = "All_Select_v1",
        All_Unselect_v1 = "All_Unselect_v1",
        Print_v1 = "Print_v1",
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
        'Column10',
        'Column11',
        'Column12',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get WRK_PKPL_SLFL(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKPL_SLFL);
    }

    get WRK_PKPL_WRK_PKPL_PCNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKPL_WRK_PKPL_PCNO);
    }

    get WRK_PKPL_WRK_PKPL_LTNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKPL_WRK_PKPL_LTNO);
    }

    get WRK_PKPL_WRK_PKPL_CNNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKPL_WRK_PKPL_CNNO);
    }

    get WRK_PKPL_WRK_PKPL_CSNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKPL_WRK_PKPL_CSNO);
    }

    get WRK_PKPL_WRK_PKPL_STAN(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKPL_WRK_PKPL_STAN);
    }

    get WRK_PKPL_WRK_PKPL_CRNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKPL_WRK_PKPL_CRNO);
    }

    get WRK_PKPL_WRK_PKPL_PART(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKPL_WRK_PKPL_PART);
    }

    get BOMAB44_PT_NAM(): FormControl {
        return this.getTableChildFormControl(MgControlName.BOMAB44_PT_NAM);
    }

    get WRK_PKPL_WRK_PKPL_PQTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKPL_WRK_PKPL_PQTY);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}