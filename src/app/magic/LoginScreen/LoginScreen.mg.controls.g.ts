import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LoginScreen = "LoginScreen",
        DisplayMessage = "DisplayMessage",
        User = "User",
        Password = "Password",
        Login = "Login",
        btn_Exit_System = "btn_Exit_System",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get User(): FormControl {
        return this.fg.controls[MgControlName.User] as FormControl;
    }

    get Password(): FormControl {
        return this.fg.controls[MgControlName.Password] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}