import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKD_PC_DETAIL_UPLOAD = "CKD_PC_DETAIL_UPLOAD",
        btnexit = "btnexit",
        Label3 = "Label3",
        v_FileName = "v_FileName",
        btnBrowse = "btnBrowse",
        btnUpload = "btnUpload",
        vStatus = "vStatus",
        v_help = "v_help",
        vBlob64base = "vBlob64base",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get v_FileName(): FormControl {
        return this.fg.controls[MgControlName.v_FileName] as FormControl;
    }

    get vStatus(): FormControl {
        return this.fg.controls[MgControlName.vStatus] as FormControl;
    }

    get vBlob64base(): FormControl {
        return this.fg.controls[MgControlName.vBlob64base] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}