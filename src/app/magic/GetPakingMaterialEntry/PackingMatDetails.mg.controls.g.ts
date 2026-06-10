import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PackingMatDetails = "PackingMatDetails",
        btnexit = "btnexit",
        btnAdd = "btnAdd",
        Table2 = "Table2",
        Column3 = "Column3",
        PM_TYPE = "PM_TYPE",
        PK_TYPE_MAST_PK_TYPE_DESC = "PK_TYPE_MAST_PK_TYPE_DESC",
        Column4 = "Column4",
        PM_CODE = "PM_CODE",
        PK_MAST_DESC = "PK_MAST_DESC",
        Column5 = "Column5",
        PM_QTY = "PM_QTY",
        Column13 = "Column13",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
        'Column13',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PM_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PM_TYPE);
    }

    get PK_TYPE_MAST_PK_TYPE_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_TYPE_MAST_PK_TYPE_DESC);
    }

    get PM_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PM_CODE);
    }

    get PK_MAST_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_MAST_DESC);
    }

    get PM_QTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.PM_QTY);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}