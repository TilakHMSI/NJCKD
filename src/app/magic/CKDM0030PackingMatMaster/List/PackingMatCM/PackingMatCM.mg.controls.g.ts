import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PackingMatCM = "PackingMatCM",
        Label1 = "Label1",
        btnexit = "btnexit",
        Label2 = "Label2",
        TYPE = "TYPE",
        Label3 = "Label3",
        CODE = "CODE",
        Label5 = "Label5",
        DESC = "DESC",
        Label7 = "Label7",
        LENG = "LENG",
        Label9 = "Label9",
        Label10 = "Label10",
        HEIG = "HEIG",
        Label12 = "Label12",
        Label13 = "Label13",
        WIDT = "WIDT",
        Label15 = "Label15",
        Label16 = "Label16",
        WEIG = "WEIG",
        Label18 = "Label18",
        Label19 = "Label19",
        EF_DT = "EF_DT",
        Label21 = "Label21",
        ED_DT = "ED_DT",
        Label23 = "Label23",
        VARNC = "VARNC",
        btnSave = "btnSave",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get TYPE(): FormControl {
        return this.fg.controls[MgControlName.TYPE] as FormControl;
    }

    get CODE(): FormControl {
        return this.fg.controls[MgControlName.CODE] as FormControl;
    }

    get DESC(): FormControl {
        return this.fg.controls[MgControlName.DESC] as FormControl;
    }

    get LENG(): FormControl {
        return this.fg.controls[MgControlName.LENG] as FormControl;
    }

    get HEIG(): FormControl {
        return this.fg.controls[MgControlName.HEIG] as FormControl;
    }

    get WIDT(): FormControl {
        return this.fg.controls[MgControlName.WIDT] as FormControl;
    }

    get WEIG(): FormControl {
        return this.fg.controls[MgControlName.WEIG] as FormControl;
    }

    get EF_DT(): FormControl {
        return this.fg.controls[MgControlName.EF_DT] as FormControl;
    }

    get ED_DT(): FormControl {
        return this.fg.controls[MgControlName.ED_DT] as FormControl;
    }

    get VARNC(): FormControl {
        return this.fg.controls[MgControlName.VARNC] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}