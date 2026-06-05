import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./StockTransferMain.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-StockTransferMain_StockTransferMain',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './StockTransferMain.component.html'
})
export class StockTransferMain extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "StockTransferMain";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return StockTransferMain.x;
    }
    Y() {
        return StockTransferMain.y;
    }
    Width(): string {
        return StockTransferMain.width;
    }
    Height(): string {
        return StockTransferMain.height;
    }
    IsCenteredToWindow() {
        return StockTransferMain.isCenteredToWindow;
    }
    FormName() {
        return StockTransferMain.formName;
    }
    ShowTitleBar() {
        return StockTransferMain.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return StockTransferMain.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return StockTransferMain.isResizable;
    }
    IsMovable() {
        return StockTransferMain.isMovable;
    }
}