import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ScheduleEntry = "ScheduleEntry",
        Table2 = "Table2",
        Column3 = "Column3",
        WRK_CSCH_WRK_CSCH_LTNO = "WRK_CSCH_WRK_CSCH_LTNO",
        Column4 = "Column4",
        PKD_LTID_PKD_MDCD = "PKD_LTID_PKD_MDCD",
        Column5 = "Column5",
        PKD_LTID_PKD_MDTY = "PKD_LTID_PKD_MDTY",
        Column6 = "Column6",
        PKD_LTID_PKD_MDOP = "PKD_LTID_PKD_MDOP",
        Column7 = "Column7",
        MTOCMST_MTMDN1 = "MTOCMST_MTMDN1",
        Column8 = "Column8",
        WRK_CSCH_WRK_CSCH_CONT = "WRK_CSCH_WRK_CSCH_CONT",
        Column9 = "Column9",
        WRK_CSCH_WRK_CSCH_CASE = "WRK_CSCH_WRK_CSCH_CASE",
        Column10 = "Column10",
        WRK_CSCH_WRK_CSCH_DATE = "WRK_CSCH_WRK_CSCH_DATE",
        Column11 = "Column11",
        WRK_CSCH_CSAP = "WRK_CSCH_CSAP",
        Column24 = "Column24",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
        Save_Button_v1 = "Save_Button_v1",
        btn_Cancel="btn_Cancel"
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
        'Column11',
        
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get WRK_CSCH_WRK_CSCH_LTNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CSCH_WRK_CSCH_LTNO);
    }

    get PKD_LTID_PKD_MDCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.PKD_LTID_PKD_MDCD);
    }

    get PKD_LTID_PKD_MDTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.PKD_LTID_PKD_MDTY);
    }

    get PKD_LTID_PKD_MDOP(): FormControl {
        return this.getTableChildFormControl(MgControlName.PKD_LTID_PKD_MDOP);
    }

    get MTOCMST_MTMDN1(): FormControl {
        return this.getTableChildFormControl(MgControlName.MTOCMST_MTMDN1);
    }

    get WRK_CSCH_WRK_CSCH_CONT(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CSCH_WRK_CSCH_CONT);
    }

    get WRK_CSCH_WRK_CSCH_CASE(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CSCH_WRK_CSCH_CASE);
    }

    get WRK_CSCH_WRK_CSCH_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CSCH_WRK_CSCH_DATE);
    }

    get WRK_CSCH_CSAP(): FormControl {
        return this.getTableChildFormControl(MgControlName.WRK_CSCH_CSAP);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}