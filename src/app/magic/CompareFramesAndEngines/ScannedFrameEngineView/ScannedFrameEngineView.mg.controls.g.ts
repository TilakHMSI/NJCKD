import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ScannedFrameEngineView = "ScannedFrameEngineView",
        Table1 = "Table1",
        Column2 = "Column2",
        FRAME_ENGINE_CHECK_C_STATUS = "FRAME_ENGINE_CHECK_C_STATUS",
        Column3 = "Column3",
        FRAME_ENGINE_CHECK_C_PC_NUMBER = "FRAME_ENGINE_CHECK_C_PC_NUMBER",
        Column4 = "Column4",
        C_ENG_FRM_TYPE = "C_ENG_FRM_TYPE",
        Column5 = "Column5",
        C_CHASSIS_NO = "C_CHASSIS_NO",
        Column6 = "Column6",
        FRAME_ENGINE_CHECK_C_EFM = "FRAME_ENGINE_CHECK_C_EFM",
        Column7 = "Column7",
        C_REC_ENTRY_DATE = "C_REC_ENTRY_DATE",
        Column8 = "Column8",
        C_REC_ENTRY_TIME = "C_REC_ENTRY_TIME",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get FRAME_ENGINE_CHECK_C_STATUS(): FormControl {
        return this.getTableChildFormControl(MgControlName.FRAME_ENGINE_CHECK_C_STATUS);
    }

    get FRAME_ENGINE_CHECK_C_PC_NUMBER(): FormControl {
        return this.getTableChildFormControl(MgControlName.FRAME_ENGINE_CHECK_C_PC_NUMBER);
    }

    get C_ENG_FRM_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.C_ENG_FRM_TYPE);
    }

    get C_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.C_CHASSIS_NO);
    }

    get FRAME_ENGINE_CHECK_C_EFM(): FormControl {
        return this.getTableChildFormControl(MgControlName.FRAME_ENGINE_CHECK_C_EFM);
    }

    get C_REC_ENTRY_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.C_REC_ENTRY_DATE);
    }

    get C_REC_ENTRY_TIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.C_REC_ENTRY_TIME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}