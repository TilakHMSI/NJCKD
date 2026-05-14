import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DisplayPackingMaster = "DisplayPackingMaster",
        Table4 = "Table4",
        Column5 = "Column5",
        WRK_PKM_WRK_PKM_CNID = "WRK_PKM_WRK_PKM_CNID",
        Column6 = "Column6",
        WRK_PKM_WRK_PKM_CSID = "WRK_PKM_WRK_PKM_CSID",
        Column7 = "Column7",
        WRK_PKM_WRK_PKM_CRID = "WRK_PKM_WRK_PKM_CRID",
        Column8 = "Column8",
        WRK_PKM_WRK_PKM_PART = "WRK_PKM_WRK_PKM_PART",
        Column9 = "Column9",
        PART_DESC = "PART_DESC",
        Column10 = "Column10",
        WRK_PKM_WRK_PKM_LEDF = "WRK_PKM_WRK_PKM_LEDF",
        Column11 = "Column11",
        WRK_PKM_WRK_PKM_LEDT = "WRK_PKM_WRK_PKM_LEDT",
        Column12 = "Column12",
        WRK_PKM_WRK_PKM_PQTY = "WRK_PKM_WRK_PKM_PQTY",
        Group1 = "Group1",
        Label3 = "Label3",
        WRK_PKM_WRK_PKM_CNTY = "WRK_PKM_WRK_PKM_CNTY",
        Group21 = "Group21",
        Label22 = "Label22",
        Label24 = "Label24",
        WRK_PKM_WRK_PKM_CSTY = "WRK_PKM_WRK_PKM_CSTY",
        Group25 = "Group25",
        Label26 = "Label26",
        Label28 = "Label28",
        WRK_PKM_WRK_PKM_CRTY = "WRK_PKM_WRK_PKM_CRTY",
        Label29 = "Label29",
        Label31 = "Label31",
        WRK_PKM_WRK_PKM_CRLW = "WRK_PKM_WRK_PKM_CRLW",
        Label33 = "Label33",
        WRK_PKM_WRK_PKM_CRUW = "WRK_PKM_WRK_PKM_CRUW",
        Label34 = "Label34",
        WRK_PKM_WRK_PKM_CRST = "WRK_PKM_WRK_PKM_CRST",
        Group36 = "Group36",
        Label38 = "Label38",
        WRK_PKM_WRK_PKM_PTWG = "WRK_PKM_WRK_PKM_PTWG",
        Label40 = "Label40",
        WRK_PKM_WRK_PKM_PMCD = "WRK_PKM_WRK_PKM_PMCD",
        PRD001_S1_MTO_NAME = "PRD001_S1_MTO_NAME",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column5',
        'Column6',
        'Column7',
        'Column8',
        'Column9',
        'Column10',
        'Column11',
        'Column12',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get WRK_PKM_WRK_PKM_CNID(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKM_WRK_PKM_CNID);
    }

    get WRK_PKM_WRK_PKM_CSID(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKM_WRK_PKM_CSID);
    }

    get WRK_PKM_WRK_PKM_CRID(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKM_WRK_PKM_CRID);
    }

    get WRK_PKM_WRK_PKM_PART(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKM_WRK_PKM_PART);
    }

    get PART_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.PART_DESC);
    }

    get WRK_PKM_WRK_PKM_LEDF(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKM_WRK_PKM_LEDF);
    }

    get WRK_PKM_WRK_PKM_LEDT(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKM_WRK_PKM_LEDT);
    }

    get WRK_PKM_WRK_PKM_PQTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_PKM_WRK_PKM_PQTY);
    }

    get WRK_PKM_WRK_PKM_CNTY(): FormControl {
        return this.fg.controls[MgControlName.WRK_PKM_WRK_PKM_CNTY] as FormControl;
    }

    get WRK_PKM_WRK_PKM_CSTY(): FormControl {
        return this.fg.controls[MgControlName.WRK_PKM_WRK_PKM_CSTY] as FormControl;
    }

    get WRK_PKM_WRK_PKM_CRTY(): FormControl {
        return this.fg.controls[MgControlName.WRK_PKM_WRK_PKM_CRTY] as FormControl;
    }

    get WRK_PKM_WRK_PKM_CRLW(): FormControl {
        return this.fg.controls[MgControlName.WRK_PKM_WRK_PKM_CRLW] as FormControl;
    }

    get WRK_PKM_WRK_PKM_CRUW(): FormControl {
        return this.fg.controls[MgControlName.WRK_PKM_WRK_PKM_CRUW] as FormControl;
    }

    get WRK_PKM_WRK_PKM_CRST(): FormControl {
        return this.fg.controls[MgControlName.WRK_PKM_WRK_PKM_CRST] as FormControl;
    }

    get WRK_PKM_WRK_PKM_PTWG(): FormControl {
        return this.fg.controls[MgControlName.WRK_PKM_WRK_PKM_PTWG] as FormControl;
    }

    get WRK_PKM_WRK_PKM_PMCD(): FormControl {
        return this.fg.controls[MgControlName.WRK_PKM_WRK_PKM_PMCD] as FormControl;
    }

    get PRD001_S1_MTO_NAME(): FormControl {
        return this.fg.controls[MgControlName.PRD001_S1_MTO_NAME] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}