import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDPARAMETERS = "CKDPARAMETERS",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        Label7 = "Label7",
        CKD_CENT = "CKD_CENT",
        btnexit = "btnexit",
        Label8 = "Label8",
        CKD_ENPT = "CKD_ENPT",
        Label9 = "Label9",
        CKD_LTFR = "CKD_LTFR",
        Label11 = "Label11",
        CKD_CNFR = "CKD_CNFR",
        Label13 = "Label13",
        CKD_CSFR = "CKD_CSFR",
        Label15 = "Label15",
        CKD_CRFR = "CKD_CRFR",
        Label17 = "Label17",
        CKD_CSSC = "CKD_CSSC",
        Label18 = "Label18",
        CKD_LTCR = "CKD_LTCR",
        Label19 = "Label19",
        CKD_CRMX = "CKD_CRMX",
        Label21 = "Label21",
        CKD_CRLM = "CKD_CRLM",
        Label23 = "Label23",
        CKD_CSLC = "CKD_CSLC",
        Label25 = "Label25",
        CKD_PTL1 = "CKD_PTL1",
        Label27 = "Label27",
        CKD_WGUS = "CKD_WGUS",
        btnSave = "btnSave",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get CKD_CENT(): FormControl {
        return this.fg.controls[MgControlName.CKD_CENT] as FormControl;
    }

    get CKD_ENPT(): FormControl {
        return this.fg.controls[MgControlName.CKD_ENPT] as FormControl;
    }

    get CKD_LTFR(): FormControl {
        return this.fg.controls[MgControlName.CKD_LTFR] as FormControl;
    }

    get CKD_CNFR(): FormControl {
        return this.fg.controls[MgControlName.CKD_CNFR] as FormControl;
    }

    get CKD_CSFR(): FormControl {
        return this.fg.controls[MgControlName.CKD_CSFR] as FormControl;
    }

    get CKD_CRFR(): FormControl {
        return this.fg.controls[MgControlName.CKD_CRFR] as FormControl;
    }

    get CKD_CSSC(): FormControl {
        return this.fg.controls[MgControlName.CKD_CSSC] as FormControl;
    }

    get CKD_LTCR(): FormControl {
        return this.fg.controls[MgControlName.CKD_LTCR] as FormControl;
    }

    get CKD_CRMX(): FormControl {
        return this.fg.controls[MgControlName.CKD_CRMX] as FormControl;
    }

    get CKD_CRLM(): FormControl {
        return this.fg.controls[MgControlName.CKD_CRLM] as FormControl;
    }

    get CKD_CSLC(): FormControl {
        return this.fg.controls[MgControlName.CKD_CSLC] as FormControl;
    }

    get CKD_PTL1(): FormControl {
        return this.fg.controls[MgControlName.CKD_PTL1] as FormControl;
    }

    get CKD_WGUS(): FormControl {
        return this.fg.controls[MgControlName.CKD_WGUS] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}