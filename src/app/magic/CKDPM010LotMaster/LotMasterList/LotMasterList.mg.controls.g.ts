import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LotMasterList = "LotMasterList",
        btnAdd = "btnAdd",
        Table7 = "Table7",
        Column8 = "Column8",
        LOT_CODE = "LOT_CODE",
        Column9 = "Column9",
        LOT_DESC = "LOT_DESC",
        Column10 = "Column10",
        LOT_MDCD = "LOT_MDCD",
        Column11 = "Column11",
        S1_MTONAME = "S1_MTONAME",
        Column12 = "Column12",
        LOT_MQTY = "LOT_MQTY",
        Column22 = "Column22",
        btnEdit = "btnEdit",
        btnDelete = "btnDelete",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column8',
        'Column9',
        'Column10',
        'Column11',
        'Column12',
        'Column22',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get LOT_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.LOT_CODE);
    }

    get LOT_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.LOT_DESC);
    }

    get LOT_MDCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.LOT_MDCD);
    }

    get S1_MTONAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.S1_MTONAME);
    }

    get LOT_MQTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.LOT_MQTY);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}