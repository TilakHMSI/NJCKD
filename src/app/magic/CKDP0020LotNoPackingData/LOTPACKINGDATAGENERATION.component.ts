import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LOTPACKINGDATAGENERATION.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0020LotNoPackingData_LOTPACKINGDATAGENERATION',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './LOTPACKINGDATAGENERATION.component.html'
})
export class LOTPACKINGDATAGENERATION extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LOTPACKINGDATAGENERATION";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1200px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return LOTPACKINGDATAGENERATION.x;
    }
    Y() {
        return LOTPACKINGDATAGENERATION.y;
    }
    Width(): string {
        return LOTPACKINGDATAGENERATION.width;
    }
    Height(): string {
        return LOTPACKINGDATAGENERATION.height;
    }
    IsCenteredToWindow() {
        return LOTPACKINGDATAGENERATION.isCenteredToWindow;
    }
    FormName() {
        return LOTPACKINGDATAGENERATION.formName;
    }
    ShowTitleBar() {
        return LOTPACKINGDATAGENERATION.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LOTPACKINGDATAGENERATION.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LOTPACKINGDATAGENERATION.isResizable;
    }
    IsMovable() {
        return LOTPACKINGDATAGENERATION.isMovable;
    }
}