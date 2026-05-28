import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CARTONDETAILS = "CARTONDETAILS",
        Label2 = "Label2",
        V_Lot_Id_v = "V_Lot_Id_v",
        Label4 = "Label4",
        WRK_CONT_WRK_CONT_CNCD = "WRK_CONT_WRK_CONT_CNCD",
        Label6 = "Label6",
        WRK_CASE_WRK_CASE_CSCD = "WRK_CASE_WRK_CASE_CSCD",
        Edit1 = "Edit1",
        Edit8 = "Edit8",
        Edit9 = "Edit9",
        Edit10 = "Edit10",
        Table13 = "Table13",
        Column14 = "Column14",
        WRK_CART_CRCD = "WRK_CART_CRCD",
        Column15 = "Column15",
        WRK_CART_CRTY = "WRK_CART_CRTY",
        Column16 = "Column16",
        WRK_CART_CRLW = "WRK_CART_CRLW",
        Column17 = "Column17",
        WRK_CART_CRUW = "WRK_CART_CRUW",
        Column18 = "Column18",
        WRK_CART_CRGW = "WRK_CART_CRGW",
        Column19 = "Column19",
        WRK_CART_CRST = "WRK_CART_CRST",
        Column20 = "Column20",
        WRK_CART_CREG = "WRK_CART_CREG",
        Label11 = "Label11",
        Label12 = "Label12",
        CARTONCOPY = "CARTONCOPY",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column14',
        'Column15',
        'Column16',
        'Column17',
        'Column18',
        'Column19',
        'Column20',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_Lot_Id_v(): FormControl {
        return this.fg.controls[MgControlName.V_Lot_Id_v] as FormControl;
    }

    get WRK_CONT_WRK_CONT_CNCD(): FormControl {
        return this.fg.controls[MgControlName.WRK_CONT_WRK_CONT_CNCD] as FormControl;
    }

    get WRK_CASE_WRK_CASE_CSCD(): FormControl {
        return this.fg.controls[MgControlName.WRK_CASE_WRK_CASE_CSCD] as FormControl;
    }

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get Edit8(): FormControl {
        return this.fg.controls[MgControlName.Edit8] as FormControl;
    }

    get Edit9(): FormControl {
        return this.fg.controls[MgControlName.Edit9] as FormControl;
    }

    get Edit10(): FormControl {
        return this.fg.controls[MgControlName.Edit10] as FormControl;
    }

    get WRK_CART_CRCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CART_CRCD);
    }

    get WRK_CART_CRTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CART_CRTY);
    }

    get WRK_CART_CRLW(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CART_CRLW);
    }

    get WRK_CART_CRUW(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CART_CRUW);
    }

    get WRK_CART_CRGW(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CART_CRGW);
    }

    get WRK_CART_CRST(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CART_CRST);
    }

    get WRK_CART_CREG(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CART_CREG);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}