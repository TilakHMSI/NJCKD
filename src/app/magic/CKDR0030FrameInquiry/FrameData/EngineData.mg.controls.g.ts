import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    EngineData = "EngineData",
        Table1 = "Table1",
        Column2 = "Column2",
        PFG_DATA_PFG_PCNO = "PFG_DATA_PFG_PCNO",
        Column3 = "Column3",
        PFG_DATA_PFG_LTNO = "PFG_DATA_PFG_LTNO",
        Column4 = "Column4",
        PFG_DATA_PFG_CNNO = "PFG_DATA_PFG_CNNO",
        Column5 = "Column5",
        PFG_DATA_PFG_CSNO = "PFG_DATA_PFG_CSNO",
        Column6 = "Column6",
        PFG_DATA_PFG_CRNO = "PFG_DATA_PFG_CRNO",
        Column7 = "Column7",
        PFG_DATA_PFG_FGNO = "PFG_DATA_PFG_FGNO",
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
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PFG_DATA_PFG_PCNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PFG_DATA_PFG_PCNO);
    }

    get PFG_DATA_PFG_LTNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PFG_DATA_PFG_LTNO);
    }

    get PFG_DATA_PFG_CNNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PFG_DATA_PFG_CNNO);
    }

    get PFG_DATA_PFG_CSNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PFG_DATA_PFG_CSNO);
    }

    get PFG_DATA_PFG_CRNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PFG_DATA_PFG_CRNO);
    }

    get PFG_DATA_PFG_FGNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PFG_DATA_PFG_FGNO);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}