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
        WRK_PKLS_SLFL = "WRK_PKLS_SLFL",
        Column4 = "Column4",
        WRK_PKLS_WRK_PKLS_PCNO = "WRK_PKLS_WRK_PKLS_PCNO",
        Column5 = "Column5",
        WRK_PKLS_WRK_PKLS_LTNO = "WRK_PKLS_WRK_PKLS_LTNO",
        Column6 = "Column6",
        PKD_LTID_PKD_MDCD = "PKD_LTID_PKD_MDCD",
        Column7 = "Column7",
        WRK_PKLS_WRK_PKLS_STAN = "WRK_PKLS_WRK_PKLS_STAN",
        Column8 = "Column8",
        WRK_PKLS_WRK_PKLS_PART = "WRK_PKLS_WRK_PKLS_PART",
        Column9 = "Column9",
        PT_NAM = "PT_NAM",
        Column10 = "Column10",
        WRK_PKLS_WRK_PKLS_PQTY = "WRK_PKLS_WRK_PKLS_PQTY",
        Label1 = "Label1",
        PC_Select_v1 = "PC_Select_v1",
        PC__Lot_Select_v1 = "PC__Lot_Select_v1",
        All_Select_v1 = "All_Select_v1",
        All_Unselect_v1 = "All_Unselect_v1",
        Print_v1 = "Print_v1",
        vBlob64base="vBlob64base",
        vFileName="vFileName",
        vBlob64base1="vBlob64base1",
        vFileName1="vFileName1"
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
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

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

    get WRK_PKLS_WRK_PKLS_STAN(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKLS_WRK_PKLS_STAN);
    }

    get WRK_PKLS_WRK_PKLS_PART(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKLS_WRK_PKLS_PART);
    }

    get PT_NAM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PT_NAM);
    }

    get WRK_PKLS_WRK_PKLS_PQTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKLS_WRK_PKLS_PQTY);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}