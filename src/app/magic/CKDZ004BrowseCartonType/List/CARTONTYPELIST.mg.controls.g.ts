import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CARTONTYPELIST = "CARTONTYPELIST",
        Table2 = "Table2",
        Column3 = "Column3",
        PK_MAST_CODE = "PK_MAST_CODE",
        Column4 = "Column4",
        PK_MAST_DESC = "PK_MAST_DESC",
        Column5 = "Column5",
        PK_MAST_LENG = "PK_MAST_LENG",
        Column6 = "Column6",
        PK_MAST_HEIG = "PK_MAST_HEIG",
        Column7 = "Column7",
        PK_MAST_WIDT = "PK_MAST_WIDT",
        Column8 = "Column8",
        PK_MAST_WEIG = "PK_MAST_WEIG",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PK_MAST_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_MAST_CODE);
    }

    get PK_MAST_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_MAST_DESC);
    }

    get PK_MAST_LENG(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_MAST_LENG);
    }

    get PK_MAST_HEIG(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_MAST_HEIG);
    }

    get PK_MAST_WIDT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_MAST_WIDT);
    }

    get PK_MAST_WEIG(): FormControl {
        return this.getTableChildFormControl(MgControlName.PK_MAST_WEIG);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}