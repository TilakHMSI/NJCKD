import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDZ012List = "CKDZ012List",
        Table2 = "Table2",
        Column3 = "Column3",
        PCR_DATA_PCR_CRNO = "PCR_DATA_PCR_CRNO",
        Column4 = "Column4",
        PCR_DATA_PCR_CRTY = "PCR_DATA_PCR_CRTY",
        Column5 = "Column5",
        Edit8 = "Edit8",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PCR_DATA_PCR_CRNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_CRNO);
    }

    get PCR_DATA_PCR_CRTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.PCR_DATA_PCR_CRTY);
    }

    get Edit8(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit8);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}