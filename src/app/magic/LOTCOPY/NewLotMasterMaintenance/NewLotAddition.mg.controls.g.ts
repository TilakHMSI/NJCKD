import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    NewLotAddition = "NewLotAddition",
        Label1 = "Label1",
        Label2 = "Label2",
        v_Lot_Code = "v_Lot_Code",
        Label4 = "Label4",
        v_Model_Code = "v_Model_Code",
        PRD001_S1_MTO_NAME = "PRD001_S1_MTO_NAME",
        Label7 = "Label7",
        v_Lot_Name = "v_Lot_Name",
        Label9 = "Label9",
        v_Lot_Qty = "v_Lot_Qty",
        Label11 = "Label11",
        v_Ok = "v_Ok",
        btnexit= "btnexit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get v_Lot_Code(): FormControl {
        return this.fg.controls[MgControlName.v_Lot_Code] as FormControl;
    }

    get v_Model_Code(): FormControl {
        return this.fg.controls[MgControlName.v_Model_Code] as FormControl;
    }

    get PRD001_S1_MTO_NAME(): FormControl {
        return this.fg.controls[MgControlName.PRD001_S1_MTO_NAME] as FormControl;
    }

    get v_Lot_Name(): FormControl {
        return this.fg.controls[MgControlName.v_Lot_Name] as FormControl;
    }

    get v_Lot_Qty(): FormControl {
        return this.fg.controls[MgControlName.v_Lot_Qty] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}