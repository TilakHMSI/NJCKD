import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDM0010ContainerList = "CKDM0010ContainerList",
        Table7 = "Table7",
        Column8 = "Column8",
        CNT_CODE = "CNT_CODE",
        Column9 = "Column9",
        CNT_MAST_CNT_DESC = "CNT_MAST_CNT_DESC",
        Column10 = "Column10",
        CNT_MAST_CNT_LENG = "CNT_MAST_CNT_LENG",
        Column11 = "Column11",
        CNT_MAST_CNT_HEIG = "CNT_MAST_CNT_HEIG",
        Column12 = "Column12",
        CNT_MAST_CNT_WIDT = "CNT_MAST_CNT_WIDT",
        Column13 = "Column13",
        CNT_MAST_CNT_WEIG = "CNT_MAST_CNT_WEIG",
        Column22 = "Column22",
        btnEdit = "btnEdit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column8',
        'Column9',
        'Column10',
        'Column11',
        'Column12',
        'Column13',
        'Column22',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CNT_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.CNT_CODE);
    }

    get CNT_MAST_CNT_DESC(): FormControl {
        return this.getTableChildFormControl(MgControlName.CNT_MAST_CNT_DESC);
    }

    get CNT_MAST_CNT_LENG(): FormControl {
        return this.getTableChildFormControl(MgControlName.CNT_MAST_CNT_LENG);
    }

    get CNT_MAST_CNT_HEIG(): FormControl {
        return this.getTableChildFormControl(MgControlName.CNT_MAST_CNT_HEIG);
    }

    get CNT_MAST_CNT_WIDT(): FormControl {
        return this.getTableChildFormControl(MgControlName.CNT_MAST_CNT_WIDT);
    }

    get CNT_MAST_CNT_WEIG(): FormControl {
        return this.getTableChildFormControl(MgControlName.CNT_MAST_CNT_WEIG);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}