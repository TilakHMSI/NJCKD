import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SelectOlddistinctParts = "SelectOlddistinctParts",
        btnexit = "btnexit",
        Table1 = "Table1",
        Column2 = "Column2",
        V_PPK_PART = "V_PPK_PART",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_PPK_PART(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_PPK_PART);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}