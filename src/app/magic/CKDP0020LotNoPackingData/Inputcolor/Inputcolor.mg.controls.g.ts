import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Inputcolor = "Inputcolor",
        btnAdd = "btnAdd",
        Table1 = "Table1",
        Column2 = "Column2",
        COLOR_CODE = "COLOR_CODE",
        Column3 = "Column3",
        QTY = "QTY",
        Column7 = "Column7",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column7',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.COLOR_CODE);
    }

    get QTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.QTY);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}