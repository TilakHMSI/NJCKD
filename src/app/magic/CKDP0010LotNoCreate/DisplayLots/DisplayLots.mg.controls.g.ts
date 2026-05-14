import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DisplayLots = "DisplayLots",
        Table1 = "Table1",
        Column2 = "Column2",
        V_Lot_No_v1 = "V_Lot_No_v1",
        Column3 = "Column3",
        V_Model_Code_v1 = "V_Model_Code_v1",
        Column4 = "Column4",
        MTOCMST_MTMDN1 = "MTOCMST_MTMDN1",
        Column5 = "Column5",
        V_Model_Type_v1 = "V_Model_Type_v1",
        Column6 = "Column6",
        V_Model_Option_v1 = "V_Model_Option_v1",
        Column7 = "Column7",
        V_Lot_Type_v1 = "V_Lot_Type_v1",
        Column8 = "Column8",
        Edit15 = "Edit15",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_Lot_No_v1(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Lot_No_v1);
    }

    get V_Model_Code_v1(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Model_Code_v1);
    }

    get MTOCMST_MTMDN1(): FormControl {
        return this.getTableChildFormControl(MgControlName.MTOCMST_MTMDN1);
    }

    get V_Model_Type_v1(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Model_Type_v1);
    }

    get V_Model_Option_v1(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Model_Option_v1);
    }

    get V_Lot_Type_v1(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_Lot_Type_v1);
    }

    get Edit15(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit15);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}