import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CASEDETAILS = "CASEDETAILS",
        Label2 = "Label2",
        WRK_CONT_WRK_CONT_LTCD = "WRK_CONT_WRK_CONT_LTCD",
        Label4 = "Label4",
        WRK_CONT_WRK_CONT_CNCD = "WRK_CONT_WRK_CONT_CNCD",
        Edit1 = "Edit1",
        Edit6 = "Edit6",
        Edit7 = "Edit7",
        Edit8 = "Edit8",
        btnexit = "btnexit",
        Table10 = "Table10",
        Column11 = "Column11",
        WRK_CASE_CSCD = "WRK_CASE_CSCD",
        Column12 = "Column12",
        WRK_CASE_CSTY = "WRK_CASE_CSTY",
        Column13 = "Column13",
        WRK_CASE_WRK_CASE_CSEG = "WRK_CASE_WRK_CASE_CSEG",
        CASECOPY = "CASECOPY",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column11',
        'Column12',
        'Column13',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get WRK_CONT_WRK_CONT_LTCD(): FormControl {
        return this.fg.controls[MgControlName.WRK_CONT_WRK_CONT_LTCD] as FormControl;
    }

    get WRK_CONT_WRK_CONT_CNCD(): FormControl {
        return this.fg.controls[MgControlName.WRK_CONT_WRK_CONT_CNCD] as FormControl;
    }

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    get Edit8(): FormControl {
        return this.fg.controls[MgControlName.Edit8] as FormControl;
    }

    get WRK_CASE_CSCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CASE_CSCD);
    }

    get WRK_CASE_CSTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CASE_CSTY);
    }

    get WRK_CASE_WRK_CASE_CSEG(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CASE_WRK_CASE_CSEG);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}