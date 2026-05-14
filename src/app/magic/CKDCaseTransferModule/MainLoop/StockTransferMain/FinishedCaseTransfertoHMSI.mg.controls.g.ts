import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FinishedCaseTransfertoHMSI = "FinishedCaseTransfertoHMSI",
        Label1 = "Label1",
        Edit2 = "Edit2",
        Group4 = "Group4",
        Label5 = "Label5",
        v_ChallanDate = "v_ChallanDate",
        V_v_ChallanTime = "V_v_ChallanTime",
        Label8 = "Label8",
        V_v_TransferTo = "V_v_TransferTo",
        Label10 = "Label10",
        v_Mode = "v_Mode",
        Label12 = "Label12",
        v_Transport = "v_Transport",
        TransporterMaster_TRNS_NM = "TransporterMaster_TRNS_NM",
        Label15 = "Label15",
        v_TruckRef = "v_TruckRef",
        Label17 = "Label17",
        v_GRNO = "v_GRNO",
        Label19 = "Label19",
        v_ResponsiblePerson = "v_ResponsiblePerson",
        Label21 = "Label21",
        v_ResponsibleDept = "v_ResponsibleDept",
        Label23 = "Label23",
        v_Remark = "v_Remark",
        Group25 = "Group25",
        Label28 = "Label28",
        v_P_C_No = "v_P_C_No",
        v_LotID = "v_LotID",
        Label3 = "Label3",
        Group29 = "Group29",
        Proceed = "Proceed",
        Exit = "Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get v_ChallanDate(): FormControl {
        return this.fg.controls[MgControlName.v_ChallanDate] as FormControl;
    }

    get V_v_ChallanTime(): FormControl {
        return this.fg.controls[MgControlName.V_v_ChallanTime] as FormControl;
    }

    get V_v_TransferTo(): FormControl {
        return this.fg.controls[MgControlName.V_v_TransferTo] as FormControl;
    }

    get v_Mode(): FormControl {
        return this.fg.controls[MgControlName.v_Mode] as FormControl;
    }

    get v_Transport(): FormControl {
        return this.fg.controls[MgControlName.v_Transport] as FormControl;
    }

    get TransporterMaster_TRNS_NM(): FormControl {
        return this.fg.controls[MgControlName.TransporterMaster_TRNS_NM] as FormControl;
    }

    get v_TruckRef(): FormControl {
        return this.fg.controls[MgControlName.v_TruckRef] as FormControl;
    }

    get v_GRNO(): FormControl {
        return this.fg.controls[MgControlName.v_GRNO] as FormControl;
    }

    get v_ResponsiblePerson(): FormControl {
        return this.fg.controls[MgControlName.v_ResponsiblePerson] as FormControl;
    }

    get v_ResponsibleDept(): FormControl {
        return this.fg.controls[MgControlName.v_ResponsibleDept] as FormControl;
    }

    get v_Remark(): FormControl {
        return this.fg.controls[MgControlName.v_Remark] as FormControl;
    }

    get v_P_C_No(): FormControl {
        return this.fg.controls[MgControlName.v_P_C_No] as FormControl;
    }

    get v_LotID(): FormControl {
        return this.fg.controls[MgControlName.v_LotID] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}