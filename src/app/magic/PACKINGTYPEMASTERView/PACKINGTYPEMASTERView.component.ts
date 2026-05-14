import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PACKINGTYPEMASTERView.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PACKINGTYPEMASTERView_PACKINGTYPEMASTERView',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PACKINGTYPEMASTERView.component.html'
})
export class PACKINGTYPEMASTERView extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PACKINGTYPEMASTERView";
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
        return PACKINGTYPEMASTERView.x;
    }
    Y() {
        return PACKINGTYPEMASTERView.y;
    }
    Width(): string {
        return PACKINGTYPEMASTERView.width;
    }
    Height(): string {
        return PACKINGTYPEMASTERView.height;
    }
    IsCenteredToWindow() {
        return PACKINGTYPEMASTERView.isCenteredToWindow;
    }
    FormName() {
        return PACKINGTYPEMASTERView.formName;
    }
    ShowTitleBar() {
        return PACKINGTYPEMASTERView.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PACKINGTYPEMASTERView.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PACKINGTYPEMASTERView.isResizable;
    }
    IsMovable() {
        return PACKINGTYPEMASTERView.isMovable;
    }
}