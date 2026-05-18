import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PACKINGSTATIONMASTERINQUIRY.mg.controls.g";
import { MgDisplayedColumns } from "./PACKINGSTATIONMASTERINQUIRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0040PackingStationMast_PACKINGSTATIONMASTERINQUIRY',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./PACKINGSTATIONMASTERINQUIRY.component.css'],
    templateUrl: './PACKINGSTATIONMASTERINQUIRY.component.html'
})
export class PACKINGSTATIONMASTERINQUIRY extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PACKINGSTATIONMASTERINQUIRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1220px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PACKINGSTATIONMASTERINQUIRY.x;
    }
    Y() {
        return PACKINGSTATIONMASTERINQUIRY.y;
    }
    Width(): string {
        return PACKINGSTATIONMASTERINQUIRY.width;
    }
    Height(): string {
        return PACKINGSTATIONMASTERINQUIRY.height;
    }
    IsCenteredToWindow() {
        return PACKINGSTATIONMASTERINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return PACKINGSTATIONMASTERINQUIRY.formName;
    }
    ShowTitleBar() {
        return PACKINGSTATIONMASTERINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PACKINGSTATIONMASTERINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PACKINGSTATIONMASTERINQUIRY.isResizable;
    }
    IsMovable() {
        return PACKINGSTATIONMASTERINQUIRY.isMovable;
    }
    override displayedColumns = this.mgdp;
}