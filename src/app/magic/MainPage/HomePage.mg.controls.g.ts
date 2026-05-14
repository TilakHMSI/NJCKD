import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    HomePage = "HomePage",
        gUserId = "gUserId",
        Subform6 = "Subform6",
}
export enum MgCustomProperties {
    HomePage_User = 'HomePage~User',
        HomePage_Menu = 'HomePage~Menu',
}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get gUserId(): FormControl {
        return this.fg.controls[MgControlName.gUserId] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}