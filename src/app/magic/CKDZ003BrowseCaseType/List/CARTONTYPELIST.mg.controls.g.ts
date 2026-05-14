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
        CAS_CODE = "CAS_CODE",
        Column4 = "Column4",
        CAS_DESC = "CAS_DESC",
        Column5 = "Column5",
        CAS_LENG = "CAS_LENG",
        Column6 = "Column6",
        CAS_HEIG = "CAS_HEIG",
        Column7 = "Column7",
        CAS_WIDT = "CAS_WIDT",
        Column8 = "Column8",
        CAS_WEIG = "CAS_WEIG",
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

    get CAS_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.CAS_CODE);
    }

    get CAS_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.CAS_DESC);
    }

    get CAS_LENG(): FormControl {
        return this.getTableChildFormControl(MgControlName.CAS_LENG);
    }

    get CAS_HEIG(): FormControl {
        return this.getTableChildFormControl(MgControlName.CAS_HEIG);
    }

    get CAS_WIDT(): FormControl {
        return this.getTableChildFormControl(MgControlName.CAS_WIDT);
    }

    get CAS_WEIG(): FormControl {
        return this.getTableChildFormControl(MgControlName.CAS_WEIG);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}