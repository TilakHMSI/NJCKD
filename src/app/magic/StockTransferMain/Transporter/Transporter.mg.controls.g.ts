import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Transporter = "Transporter",
        Table1 = "Table1",
        Column2 = "Column2",
        TransporterMaster_TRNS_CD = "TransporterMaster_TRNS_CD",
        Column3 = "Column3",
        TransporterMaster_TRNS_NM = "TransporterMaster_TRNS_NM",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get TransporterMaster_TRNS_CD(): FormControl {
        return this.getTableChildFormControl(MgControlName.TransporterMaster_TRNS_CD);
    }

    get TransporterMaster_TRNS_NM(): FormControl {
        return this.getTableChildFormControl(MgControlName.TransporterMaster_TRNS_NM);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}