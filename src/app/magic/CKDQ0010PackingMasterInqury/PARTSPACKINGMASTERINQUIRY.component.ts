import { Component } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PARTSPACKINGMASTERINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDQ0010PackingMasterInqury_PARTSPACKINGMASTERINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PARTSPACKINGMASTERINQUIRY.component.html'
})
export class PARTSPACKINGMASTERINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PARTSPACKINGMASTERINQUIRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1350px";
    private static readonly height: string = "750px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PARTSPACKINGMASTERINQUIRY.x;
    }
    Y() {
        return PARTSPACKINGMASTERINQUIRY.y;
    }
    Width(): string {
        return PARTSPACKINGMASTERINQUIRY.width;
    }
    Height(): string {
        return PARTSPACKINGMASTERINQUIRY.height;
    }
    IsCenteredToWindow() {
        return PARTSPACKINGMASTERINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return PARTSPACKINGMASTERINQUIRY.formName;
    }
    ShowTitleBar() {
        return PARTSPACKINGMASTERINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PARTSPACKINGMASTERINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PARTSPACKINGMASTERINQUIRY.isResizable;
    }
    IsMovable() {
        return PARTSPACKINGMASTERINQUIRY.isMovable;
    }

    override ngOnInit(): void {
  super.ngOnInit();

  const ctrl = this.screenFormGroup?.get('vBlob64base') as FormControl | null;

  if (ctrl) {
    ctrl.valueChanges.subscribe(() => this.onChangeBlob());
  }
}

private onChangeBlob(): void {
  const base64 = this.mg.getValue('vBlob64base');
  
  if (base64 !== undefined && base64 !== null && base64 !== '') {
    this.downloadblb2();
  }
}

private downloadblb2(): void {
  const base64 = this.mg.getValue('vBlob64base');

  if (base64 === undefined || base64 === null || base64 === '') {
    return;
  }

  const byteCharacters = atob(base64);
  const byteNumbers = Array.from(byteCharacters, c => c.charCodeAt(0));
  const byteArray = new Uint8Array(byteNumbers);
  const fileBlob = new Blob([byteArray]);

  if (fileBlob.size > 0) {
    const filename = this.mg.getValue(this.mgc.vFileName) || 'download.bin';
    const url = window.URL.createObjectURL(fileBlob);
    const a = document.createElement('a');

    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
}