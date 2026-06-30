import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PARTSPACKINGMASTERINQUIRY = "PARTSPACKINGMASTERINQUIRY",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        Label8 = "Label8",
        Lot_Type_v = "Lot_Type_v",
        Label10 = "Label10",
        Date_v = "Date_v",
        Option_v = "Option_v",
        LOT_MAST_LOT_DESC = "LOT_MAST_LOT_DESC",
        Edit12 = "Edit12",
        DisplayPackingMaster = "DisplayPackingMaster",
        btnSearch = "btnSearch",
        btnexit = "btnexit",
        vPartNo = "vPartNo",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Lot_Type_v(): FormControl {
        return this.fg.controls[MgControlName.Lot_Type_v] as FormControl;
    }

    get Date_v(): FormControl {
        return this.fg.controls[MgControlName.Date_v] as FormControl;
    }

    get Option_v(): FormControl {
        return this.fg.controls[MgControlName.Option_v] as FormControl;
    }

    get LOT_MAST_LOT_DESC(): FormControl {
        return this.fg.controls[MgControlName.LOT_MAST_LOT_DESC] as FormControl;
    }

    get Edit12(): FormControl {
        return this.fg.controls[MgControlName.Edit12] as FormControl;
    }

    get vPartNo(): FormControl {
        return this.fg.controls[MgControlName.vPartNo] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}