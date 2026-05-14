import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ENGINELIST = "ENGINELIST",
        Edit1 = "Edit1",
        Table2 = "Table2",
        Column3 = "Column3",
        PEG_DATA_PEG_EGNO = "PEG_DATA_PEG_EGNO",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get PEG_DATA_PEG_EGNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PEG_DATA_PEG_EGNO);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}