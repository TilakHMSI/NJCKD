import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PCGuide = "PCGuide",
        btnexit = "btnexit",
        Table1 = "Table1",
        Column2 = "Column2",
        V_CHK_PCNO = "V_CHK_PCNO",
        Column3 = "Column3",
        V_CHK_MDCD = "V_CHK_MDCD",
        Column4 = "Column4",
        V_CHK_MDTY = "V_CHK_MDTY",
        Column5 = "Column5",
        V_CHK_MDOP = "V_CHK_MDOP",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_CHK_PCNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_CHK_PCNO);
    }

    get V_CHK_MDCD(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_CHK_MDCD);
    }

    get V_CHK_MDTY(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_CHK_MDTY);
    }

    get V_CHK_MDOP(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_CHK_MDOP);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}