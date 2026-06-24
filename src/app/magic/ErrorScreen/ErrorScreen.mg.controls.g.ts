import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ErrorScreen = "ErrorScreen",
        btnexit = "btnexit",
        Label1 = "Label1",
        ErrDatabaseName = "ErrDatabaseName",
        Label3 = "Label3",
        ErrDbmsCode = "ErrDbmsCode",
        Label5 = "Label5",
        ErrDbmsMessage = "ErrDbmsMessage",
        Label7 = "Label7",
        ErrMagicName = "ErrMagicName",
        Label9 = "Label9",
        ErrTableName = "ErrTableName",
        Label11 = "Label11",
        Program = "Program",
        Label15 = "Label15",
        TaskID = "TaskID",
        Label17 = "Label17",
        Date = "Date",
        Label19 = "Label19",
        Time = "Time",
        Label21 = "Label21",
        DBErr_0001 = "DBErr_0001",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get ErrDatabaseName(): FormControl {
        return this.fg.controls[MgControlName.ErrDatabaseName] as FormControl;
    }

    get ErrDbmsCode(): FormControl {
        return this.fg.controls[MgControlName.ErrDbmsCode] as FormControl;
    }

    get ErrDbmsMessage(): FormControl {
        return this.fg.controls[MgControlName.ErrDbmsMessage] as FormControl;
    }

    get ErrMagicName(): FormControl {
        return this.fg.controls[MgControlName.ErrMagicName] as FormControl;
    }

    get ErrTableName(): FormControl {
        return this.fg.controls[MgControlName.ErrTableName] as FormControl;
    }

    get Program(): FormControl {
        return this.fg.controls[MgControlName.Program] as FormControl;
    }

    get TaskID(): FormControl {
        return this.fg.controls[MgControlName.TaskID] as FormControl;
    }

    get Date(): FormControl {
        return this.fg.controls[MgControlName.Date] as FormControl;
    }

    get Time(): FormControl {
        return this.fg.controls[MgControlName.Time] as FormControl;
    }

    get DBErr_0001(): FormControl {
        return this.fg.controls[MgControlName.DBErr_0001] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}