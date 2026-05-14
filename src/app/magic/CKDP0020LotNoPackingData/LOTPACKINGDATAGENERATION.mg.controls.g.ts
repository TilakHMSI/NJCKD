import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LOTPACKINGDATAGENERATION = "LOTPACKINGDATAGENERATION",
        Image1 = "Image1",
        Edit3 = "Edit3",
        Edit2 = "Edit2",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        Label6 = "Label6",
        Label7 = "Label7",
        Option_v = "Option_v",
        Label8 = "Label8",
        Label9 = "Label9",
        Label13 = "Label13",
        Label16 = "Label16",
        PC_No_v = "PC_No_v",
        KDPCHED_PH_DSCD = "KDPCHED_PH_DSCD",
        PKD_LTID_PKD_MDCD = "PKD_LTID_PKD_MDCD",
        DSTBMST_DS_DSENAM = "DSTBMST_DS_DSENAM",
        Label11 = "Label11",
        MTOCMST_MTMDN1 = "MTOCMST_MTMDN1",
        Lot_No_v = "Lot_No_v",
        PKD_LTID_PKD_MDTY = "PKD_LTID_PKD_MDTY",
        PKD_LTID_PKD_MDOP = "PKD_LTID_PKD_MDOP",
        Ok_Button_V = "Ok_Button_V",
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

    get Option_v(): FormControl {
        return this.fg.controls[MgControlName.Option_v] as FormControl;
    }

    get PC_No_v(): FormControl {
        return this.fg.controls[MgControlName.PC_No_v] as FormControl;
    }

    get KDPCHED_PH_DSCD(): FormControl {
        return this.fg.controls[MgControlName.KDPCHED_PH_DSCD] as FormControl;
    }

    get PKD_LTID_PKD_MDCD(): FormControl {
        return this.fg.controls[MgControlName.PKD_LTID_PKD_MDCD] as FormControl;
    }

    get DSTBMST_DS_DSENAM(): FormControl {
        return this.fg.controls[MgControlName.DSTBMST_DS_DSENAM] as FormControl;
    }

    get MTOCMST_MTMDN1(): FormControl {
        return this.fg.controls[MgControlName.MTOCMST_MTMDN1] as FormControl;
    }

    get Lot_No_v(): FormControl {
        return this.fg.controls[MgControlName.Lot_No_v] as FormControl;
    }

    get PKD_LTID_PKD_MDTY(): FormControl {
        return this.fg.controls[MgControlName.PKD_LTID_PKD_MDTY] as FormControl;
    }

    get PKD_LTID_PKD_MDOP(): FormControl {
        return this.fg.controls[MgControlName.PKD_LTID_PKD_MDOP] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}