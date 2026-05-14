import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PCEngineData = "PCEngineData",
        Table1 = "Table1",
        Column2 = "Column2",
        PEG_DATA_PEG_PCNO = "PEG_DATA_PEG_PCNO",
        Column3 = "Column3",
        PEG_DATA_PEG_LTNO = "PEG_DATA_PEG_LTNO",
        Column4 = "Column4",
        PEG_DATA_PEG_CNNO = "PEG_DATA_PEG_CNNO",
        Column5 = "Column5",
        PEG_DATA_PEG_CSNO = "PEG_DATA_PEG_CSNO",
        Column6 = "Column6",
        PEG_DATA_PEG_CRNO = "PEG_DATA_PEG_CRNO",
        Column7 = "Column7",
        PEG_DATA_PEG_EGNO = "PEG_DATA_PEG_EGNO",
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

    get PEG_DATA_PEG_PCNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PEG_DATA_PEG_PCNO);
    }

    get PEG_DATA_PEG_LTNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PEG_DATA_PEG_LTNO);
    }

    get PEG_DATA_PEG_CNNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PEG_DATA_PEG_CNNO);
    }

    get PEG_DATA_PEG_CSNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PEG_DATA_PEG_CSNO);
    }

    get PEG_DATA_PEG_CRNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PEG_DATA_PEG_CRNO);
    }

    get PEG_DATA_PEG_EGNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PEG_DATA_PEG_EGNO);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}