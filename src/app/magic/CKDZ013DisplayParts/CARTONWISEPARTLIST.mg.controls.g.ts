import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CARTONWISEPARTLIST = "CARTONWISEPARTLIST",
        Edit1 = "Edit1",
        Table2 = "Table2",
        Column3 = "Column3",
        PPT_DATA_PPT_PART = "PPT_DATA_PPT_PART",
        Column4 = "Column4",
        BOMAB44_PT_NAM = "BOMAB44_PT_NAM",
        Column5 = "Column5",
        PPT_DATA_PPT_PQTY = "PPT_DATA_PPT_PQTY",
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

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get PPT_DATA_PPT_PART(): FormControl {
        return this.getTableChildFormControl(MgControlName.PPT_DATA_PPT_PART);
    }

    get BOMAB44_PT_NAM(): FormControl {
        return this.getTableChildFormControl(MgControlName.BOMAB44_PT_NAM);
    }

    get PPT_DATA_PPT_PQTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.PPT_DATA_PPT_PQTY);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}