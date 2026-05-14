import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LOTCASELIST = "LOTCASELIST",
        Edit1 = "Edit1",
        Table2 = "Table2",
        Column3 = "Column3",
        PCS_DATA_PCS_CSNO = "PCS_DATA_PCS_CSNO",
        Column4 = "Column4",
        PCS_DATA_PCS_CSTY = "PCS_DATA_PCS_CSTY",
        Column5 = "Column5",
        Edit8 = "Edit8",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get PCS_DATA_PCS_CSNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_CSNO);
    }

    get PCS_DATA_PCS_CSTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCS_DATA_PCS_CSTY);
    }

    get Edit8(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit8);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}