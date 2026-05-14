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
        PKD_LTID_PKD_MDCD = "PKD_LTID_PKD_MDCD",
        Label1 = "Label1",
        All_Select_v1 = "All_Select_v1",
        All_Unselect_v1 = "All_Unselect_v1",
        Print_v1 = "Print_v1",
        Exit_v1 = "Exit_v1",
        Help = "Help",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
        'Column6',
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

    get PKD_LTID_PKD_MDCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.PKD_LTID_PKD_MDCD);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}