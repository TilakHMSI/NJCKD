import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PACKINGMASTERVALIDATIONBOM = "PACKINGMASTERVALIDATIONBOM",
        Image1 = "Image1",
        vBlob64Base = "vBlob64Base",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        vFileName = "vFileName",
        Edit5 = "Edit5",
        btnexit = "btnexit",
        Label7 = "Label7",
        Lot_Id_v = "Lot_Id_v",
        Label9 = "Label9",
        Effective_Date_v = "Effective_Date_v",
        OK_Button_v = "OK_Button_v",
        LOT_MAST_LOT_DESC = "LOT_MAST_LOT_DESC",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vBlob64Base(): FormControl {
        return this.fg.controls[MgControlName.vBlob64Base] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get vFileName(): FormControl {
        return this.fg.controls[MgControlName.vFileName] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Lot_Id_v(): FormControl {
        return this.fg.controls[MgControlName.Lot_Id_v] as FormControl;
    }

    get Effective_Date_v(): FormControl {
        return this.fg.controls[MgControlName.Effective_Date_v] as FormControl;
    }

    get LOT_MAST_LOT_DESC(): FormControl {
        return this.fg.controls[MgControlName.LOT_MAST_LOT_DESC] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}