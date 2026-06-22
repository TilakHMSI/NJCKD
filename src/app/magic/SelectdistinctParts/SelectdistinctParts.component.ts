import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectdistinctParts.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SelectdistinctParts_SelectdistinctParts',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SelectdistinctParts.component.html'
})
export class SelectdistinctParts extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SelectdistinctParts";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return SelectdistinctParts.x;
    }
    Y() {
        return SelectdistinctParts.y;
    }
    Width(): string {
        return SelectdistinctParts.width;
    }
    Height(): string {
        return SelectdistinctParts.height;
    }
    IsCenteredToWindow() {
        return SelectdistinctParts.isCenteredToWindow;
    }
    FormName() {
        return SelectdistinctParts.formName;
    }
    ShowTitleBar() {
        return SelectdistinctParts.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SelectdistinctParts.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SelectdistinctParts.isResizable;
    }
    IsMovable() {
        return SelectdistinctParts.isMovable;
    }
}