import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CONTAINERDETAILS = "CONTAINERDETAILS",
        Label2 = "Label2",
        V_Lot_Id_v = "V_Lot_Id_v",
        Edit1 = "Edit1",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        Edit6 = "Edit6",
        btnAdd = "btnAdd",
        CancelCtrl = "CancelCtrl",
        Table8 = "Table8",
        Column9 = "Column9",
        WRK_CONT_CNCD = "WRK_CONT_CNCD",
        Column10 = "Column10",
        WRK_CONT_CNTY = "WRK_CONT_CNTY",
        Column15 = "Column15",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
        btnNext = "btnNext",
        SaveCtrl = "SaveCtrl",
        btnCancel = "btnCancel",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column9',
        'Column10',
        'Column15',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_Lot_Id_v(): FormControl {
        return this.fg.controls[MgControlName.V_Lot_Id_v] as FormControl;
    }

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get WRK_CONT_CNCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CONT_CNCD);
    }

    get WRK_CONT_CNTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CONT_CNTY);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}