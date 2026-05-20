import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LOTCONTAINERLIST = "LOTCONTAINERLIST",
        Edit1 = "Edit1",
        Table2 = "Table2",
        Column3 = "Column3",
        PCN_DATA_PCN_CNNO = "PCN_DATA_PCN_CNNO",
        Column4 = "Column4",
        PCN_DATA_PCN_CNTY = "PCN_DATA_PCN_CNTY",
        Column5 = "Column5",
        Edit8 = "Edit8",
        btnexit="btnexit"
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

    get PCN_DATA_PCN_CNNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCN_DATA_PCN_CNNO);
    }

    get PCN_DATA_PCN_CNTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCN_DATA_PCN_CNTY);
    }

    get Edit8(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit8);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}