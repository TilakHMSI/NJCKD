import { Component } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PACKINGMASTERVALIDATIONBOM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0130PackingMasterError_PACKINGMASTERVALIDATIONBOM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PACKINGMASTERVALIDATIONBOM.component.html'
})
export class PACKINGMASTERVALIDATIONBOM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
 private static readonly formName: string = "PACKINGMASTERVALIDATIONBOM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1100px";
    private static readonly height: string = "320px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PACKINGMASTERVALIDATIONBOM.x;
    }
    Y() {
        return PACKINGMASTERVALIDATIONBOM.y;
    }
    Width(): string {
        return PACKINGMASTERVALIDATIONBOM.width;
    }
    Height(): string {
        return PACKINGMASTERVALIDATIONBOM.height;
    }
    IsCenteredToWindow() {
        return PACKINGMASTERVALIDATIONBOM.isCenteredToWindow;
    }
    FormName() {
        return PACKINGMASTERVALIDATIONBOM.formName;
    }
    ShowTitleBar() {
        return PACKINGMASTERVALIDATIONBOM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PACKINGMASTERVALIDATIONBOM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PACKINGMASTERVALIDATIONBOM.isResizable;
    }
    IsMovable() {
        return PACKINGMASTERVALIDATIONBOM.isMovable;
    }

      override ngOnInit(): void {
    super.ngOnInit();

    const group = this.screenFormGroup;

    const control = group.get('vBlob64Base') as FormControl;

    control?.registerOnChange(() => {
      this.onBlobChange();
    });
  }

  private onBlobChange(): void {
    const base64 = this.mg.getValue('vBlob64Base');

    if (base64) {
      this.downloadBlob();
    }
  }

  private downloadBlob(): void {
    const base64: string = this.mg.getValue('vBlob64Base');

    if (!base64) {
      return;
    }

    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray]);

    if (blob.size === 0) {
      return;
    }

    const fileName = this.mg.getValue(this.mgc.vFileName) || 'download';

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();

    window.URL.revokeObjectURL(url);
  }
}