import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PartsNoPicklist.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PicklistForPartNo_PartsNoPicklist',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PartsNoPicklist.component.html'
})
export class PartsNoPicklist extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PartsNoPicklist";
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
        return PartsNoPicklist.x;
    }
    Y() {
        return PartsNoPicklist.y;
    }
    Width(): string {
        return PartsNoPicklist.width;
    }
    Height(): string {
        return PartsNoPicklist.height;
    }
    IsCenteredToWindow() {
        return PartsNoPicklist.isCenteredToWindow;
    }
    FormName() {
        return PartsNoPicklist.formName;
    }
    ShowTitleBar() {
        return PartsNoPicklist.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PartsNoPicklist.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PartsNoPicklist.isResizable;
    }
    IsMovable() {
        return PartsNoPicklist.isMovable;
    }
}