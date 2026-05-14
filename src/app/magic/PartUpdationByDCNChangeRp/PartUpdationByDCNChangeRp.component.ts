import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PartUpdationByDCNChangeRp.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PartUpdationByDCNChangeRp_PartUpdationByDCNChangeRp',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PartUpdationByDCNChangeRp.component.html'
})
export class PartUpdationByDCNChangeRp extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PartUpdationByDCNChangeRp";
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
        return PartUpdationByDCNChangeRp.x;
    }
    Y() {
        return PartUpdationByDCNChangeRp.y;
    }
    Width(): string {
        return PartUpdationByDCNChangeRp.width;
    }
    Height(): string {
        return PartUpdationByDCNChangeRp.height;
    }
    IsCenteredToWindow() {
        return PartUpdationByDCNChangeRp.isCenteredToWindow;
    }
    FormName() {
        return PartUpdationByDCNChangeRp.formName;
    }
    ShowTitleBar() {
        return PartUpdationByDCNChangeRp.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PartUpdationByDCNChangeRp.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PartUpdationByDCNChangeRp.isResizable;
    }
    IsMovable() {
        return PartUpdationByDCNChangeRp.isMovable;
    }
}