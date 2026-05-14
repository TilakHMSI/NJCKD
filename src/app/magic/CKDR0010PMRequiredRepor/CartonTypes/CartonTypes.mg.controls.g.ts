import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CartonTypes = "CartonTypes",
        Table2 = "Table2",
        Column3 = "Column3",
        WRK_CRTY_STAN = "WRK_CRTY_STAN",
        Column4 = "Column4",
        WRK_CRTYPE = "WRK_CRTYPE",
        Column5 = "Column5",
        WRK_CRTY_CODE = "WRK_CRTY_CODE",
        Column6 = "Column6",
        PK_MAST_DESC = "PK_MAST_DESC",
        Column7 = "Column7",
        PK_MAST_LENG = "PK_MAST_LENG",
        Column8 = "Column8",
        PK_MAST_HEIG = "PK_MAST_HEIG",
        Column9 = "Column9",
        PK_MAST_WIDT = "PK_MAST_WIDT",
        Column10 = "Column10",
        WRK_CRTY_WRK_CRTY_CQTY = "WRK_CRTY_WRK_CRTY_CQTY",
        Label1 = "Label1",
        Print_Button_v1 = "Print_Button_v1",
        Exit_Button_v1 = "Exit_Button_v1",
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
        'Column9',
        'Column10',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get WRK_CRTY_STAN(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CRTY_STAN);
    }

    get WRK_CRTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CRTYPE);
    }

    get WRK_CRTY_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CRTY_CODE);
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

    get WRK_CRTY_WRK_CRTY_CQTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CRTY_WRK_CRTY_CQTY);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}