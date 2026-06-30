import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ChangeUserPassword = "ChangeUserPassword",
        UserIdLbl = "UserIdLbl",
        vUserIDEdit = "vUserIDEdit",
        Label10 = "Label10",
        vOldPassword = "vOldPassword",
        imgOldPass = "imgOldPass",
        NewPasswordLbl = "NewPasswordLbl",
        NewPasswordEdit = "NewPasswordEdit",
        ConfirmNewPasswordLbl = "ConfirmNewPasswordLbl",
        ConfirmNewPasswordEdit = "ConfirmNewPasswordEdit",
        imgConfirm = "imgConfirm",
        ChangeBtn = "ChangeBtn",
        CancelBtn = "CancelBtn",
        ErrorMsg="ErrorMsg"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vUserIDEdit(): FormControl {
        return this.fg.controls[MgControlName.vUserIDEdit] as FormControl;
    }

    get vOldPassword(): FormControl {
        return this.fg.controls[MgControlName.vOldPassword] as FormControl;
    }

    get NewPasswordEdit(): FormControl {
        return this.fg.controls[MgControlName.NewPasswordEdit] as FormControl;
    }

    get ConfirmNewPasswordEdit(): FormControl {
        return this.fg.controls[MgControlName.ConfirmNewPasswordEdit] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}