import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    HomePage = "HomePage",
        Req = "Req",
        MainContaint = "MainContaint",
}
export enum MgCustomProperties {
    HomePage_Menu = 'HomePage~Menu',
        HomePage_User = 'HomePage~User',
        HomePage_Module = 'HomePage~Module',
        HomePage_Version = 'HomePage~Version',
}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}