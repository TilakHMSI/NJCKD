import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SelectLots = "SelectLots",
        btnexit = "btnexit",
        Table1 = "Table1",
        Column2 = "Column2",
        WRK_PCSEL_PCNO = "WRK_PCSEL_PCNO",
        Column3 = "Column3",
        WRK_PCSEL_LTNO = "WRK_PCSEL_LTNO",
        Column4 = "Column4",
        LOT_MAST_LOT_DESC = "LOT_MAST_LOT_DESC",
        WRK_PCSEL_FLAG = "WRK_PCSEL_FLAG",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get WRK_PCSEL_PCNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PCSEL_PCNO);
    }

    get WRK_PCSEL_LTNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PCSEL_LTNO);
    }

    get LOT_MAST_LOT_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.LOT_MAST_LOT_DESC);
    }

    get WRK_PCSEL_FLAG(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PCSEL_FLAG);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}