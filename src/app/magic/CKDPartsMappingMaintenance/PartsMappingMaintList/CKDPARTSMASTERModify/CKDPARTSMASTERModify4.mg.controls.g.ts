import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDPARTSMASTERModify4 = "CKDPARTSMASTERModify4",
        Label1 = "Label1",
        Label2 = "Label2",
        PART_NO = "PART_NO",
        Label4 = "Label4",
        BASE_PART_NO = "BASE_PART_NO",
        Label6 = "Label6",
        PART_COLOR = "PART_COLOR",
        Label8 = "Label8",
        PART_LTCD_0001 = "PART_LTCD_0001",
        Label10 = "Label10",
        STATUS = "STATUS",
        Label12 = "Label12",
        IS_REQUIRED_0001 = "IS_REQUIRED_0001",
        v_SaveExit = "v_SaveExit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PART_NO(): FormControl {
        return this.fg.controls[MgControlName.PART_NO] as FormControl;
    }

    get BASE_PART_NO(): FormControl {
        return this.fg.controls[MgControlName.BASE_PART_NO] as FormControl;
    }

    get PART_COLOR(): FormControl {
        return this.fg.controls[MgControlName.PART_COLOR] as FormControl;
    }

    get PART_LTCD_0001(): FormControl {
        return this.fg.controls[MgControlName.PART_LTCD_0001] as FormControl;
    }

    get STATUS(): FormControl {
        return this.fg.controls[MgControlName.STATUS] as FormControl;
    }

    get IS_REQUIRED_0001(): FormControl {
        return this.fg.controls[MgControlName.IS_REQUIRED_0001] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}