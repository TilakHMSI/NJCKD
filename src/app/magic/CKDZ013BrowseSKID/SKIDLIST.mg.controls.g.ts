import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SKIDLIST = "SKIDLIST",
        btnexit = "btnexit",
        Edit1 = "Edit1",
        Table2 = "Table2",
        Column3 = "Column3",
        SKD_MAST_SKID_CONTROL_NO = "SKD_MAST_SKID_CONTROL_NO",
        Column4 = "Column4",
        SKD_MAST_SKID_PC_NO = "SKD_MAST_SKID_PC_NO",
        Column5 = "Column5",
        SKD_MAST_SKID_LOT_NO = "SKD_MAST_SKID_LOT_NO",
        Column6 = "Column6",
        SKD_MAST_SKID_CONTAINER_NO = "SKD_MAST_SKID_CONTAINER_NO",
        Column7 = "Column7",
        SKD_MAST_SKID_CASE_NO = "SKD_MAST_SKID_CASE_NO",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get SKD_MAST_SKID_CONTROL_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.SKD_MAST_SKID_CONTROL_NO);
    }

    get SKD_MAST_SKID_PC_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.SKD_MAST_SKID_PC_NO);
    }

    get SKD_MAST_SKID_LOT_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.SKD_MAST_SKID_LOT_NO);
    }

    get SKD_MAST_SKID_CONTAINER_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.SKD_MAST_SKID_CONTAINER_NO);
    }

    get SKD_MAST_SKID_CASE_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.SKD_MAST_SKID_CASE_NO);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}