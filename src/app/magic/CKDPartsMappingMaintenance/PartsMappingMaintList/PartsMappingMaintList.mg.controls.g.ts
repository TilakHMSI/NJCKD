import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PartsMappingMaintList = "PartsMappingMaintList",
        Label1 = "Label1",
        btnAdd = "btnAdd",
        Table2 = "Table2",
        Column3 = "Column3",
        Part_Number = "Part_Number",
        Column4 = "Column4",
        PART_NAME = "PART_NAME",
        Column5 = "Column5",
        BASE_PART_NO = "BASE_PART_NO",
        Column6 = "Column6",
        PART_COLOR = "PART_COLOR",
        Column7 = "Column7",
        PART_LTCD = "PART_LTCD",
        Column17 = "Column17",
        btnEdit = "btnEdit",
        btnDelete = "btnDelete",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column17',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Part_Number(): FormControl {
        return this.getTableChildFormControl(MgControlName.Part_Number);
    }

    get PART_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PART_NAME);
    }

    get BASE_PART_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.BASE_PART_NO);
    }

    get PART_COLOR(): FormControl {
        return this.getTableChildFormControl(MgControlName.PART_COLOR);
    }

    get PART_LTCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.PART_LTCD);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}