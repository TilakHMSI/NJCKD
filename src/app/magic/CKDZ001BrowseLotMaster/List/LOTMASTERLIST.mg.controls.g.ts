import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LOTMASTERLIST = "LOTMASTERLIST",
        Edit1 = "Edit1",
        Table2 = "Table2",
        Column3 = "Column3",
        V_Lot_Code_v = "V_Lot_Code_v",
        Column4 = "Column4",
        V_Lot_Desc_v = "V_Lot_Desc_v",
        Column5 = "Column5",
        V_Lot_Model_v = "V_Lot_Model_v",
        Column6 = "Column6",
        PRD001_S1_MTO_NAME = "PRD001_S1_MTO_NAME",
        Column7 = "Column7",
        V_Lot_Qty_v = "V_Lot_Qty_v",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
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

    get V_Lot_Code_v(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Lot_Code_v);
    }

    get V_Lot_Desc_v(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Lot_Desc_v);
    }

    get V_Lot_Model_v(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Lot_Model_v);
    }

    get PRD001_S1_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD001_S1_MTO_NAME);
    }

    get V_Lot_Qty_v(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Lot_Qty_v);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}