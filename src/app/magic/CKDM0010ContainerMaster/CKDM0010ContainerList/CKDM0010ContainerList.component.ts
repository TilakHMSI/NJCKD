import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDM0010ContainerList.mg.controls.g";
import { MgDisplayedColumns } from "./CKDM0010ContainerList.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDM0010ContainerMaster_CKDM0010ContainerList_CKDM0010ContainerList',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./CKDM0010ContainerList.component.css'],
    templateUrl: './CKDM0010ContainerList.component.html'
})
export class CKDM0010ContainerList extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKDM0010ContainerList";
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
        return CKDM0010ContainerList.x;
    }
    Y() {
        return CKDM0010ContainerList.y;
    }
    Width(): string {
        return CKDM0010ContainerList.width;
    }
    Height(): string {
        return CKDM0010ContainerList.height;
    }
    IsCenteredToWindow() {
        return CKDM0010ContainerList.isCenteredToWindow;
    }
    FormName() {
        return CKDM0010ContainerList.formName;
    }
    ShowTitleBar() {
        return CKDM0010ContainerList.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKDM0010ContainerList.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKDM0010ContainerList.isResizable;
    }
    IsMovable() {
        return CKDM0010ContainerList.isMovable;
    }
    override displayedColumns = this.mgdp;
}