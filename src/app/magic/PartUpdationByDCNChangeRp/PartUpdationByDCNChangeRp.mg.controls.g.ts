import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PartUpdationByDCNChangeRp = "PartUpdationByDCNChangeRp",
        Edit2 = "Edit2",
        v_Range = "v_Range",
        vFileName = "vFileName",
        btnexit = "btnexit",
        btnView = "btnView",
        vBlob64base = "vBlob64base",
        Label6 = "Label6",
        v_DCN_No = "v_DCN_No",
        v_LotNo = "v_LotNo",
        v_DateT = "v_DateT",
        Label2 = "Label2",
        Label3 = "Label3",
        Label4 = "Label4",
        Label12 = "Label12",
        Label5 = "Label5",
        v_PCNo = "v_PCNo",
        v_Month = "v_Month",
        v_DateF = "v_DateF",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get v_Range(): FormControl {
        return this.fg.controls[MgControlName.v_Range] as FormControl;
    }

    get vFileName(): FormControl {
        return this.fg.controls[MgControlName.vFileName] as FormControl;
    }

    get vBlob64base(): FormControl {
        return this.fg.controls[MgControlName.vBlob64base] as FormControl;
    }

    get v_DCN_No(): FormControl {
        return this.fg.controls[MgControlName.v_DCN_No] as FormControl;
    }

    get v_LotNo(): FormControl {
        return this.fg.controls[MgControlName.v_LotNo] as FormControl;
    }

    get v_DateT(): FormControl {
        return this.fg.controls[MgControlName.v_DateT] as FormControl;
    }

    get v_PCNo(): FormControl {
        return this.fg.controls[MgControlName.v_PCNo] as FormControl;
    }

    get v_Month(): FormControl {
        return this.fg.controls[MgControlName.v_Month] as FormControl;
    }

    get v_DateF(): FormControl {
        return this.fg.controls[MgControlName.v_DateF] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}