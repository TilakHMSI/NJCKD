import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  MgFormControlsAccessor,
  MgControlName,
  MgCustomProperties
} from './PARTSPACKINGMASTERINQUIRY.mg.controls.g';

import {
  TaskBaseMagicComponent,
  magicProviders,
  MagicModalInterface
} from '@magic-xpa/angular';

@Component({
  selector: 'mga-CKDQ0010PackingMasterInqury_PARTSPACKINGMASTERINQUIRY',
  providers: [...magicProviders],
  standalone: false,
  templateUrl: './PARTSPACKINGMASTERINQUIRY.component.html'
})
export class PARTSPACKINGMASTERINQUIRY
  extends TaskBaseMagicComponent
  implements MagicModalInterface {

  mgc = MgControlName;
  mgcp = MgCustomProperties;
  mgfc!: MgFormControlsAccessor;

  override createFormControlsAccessor(formGroup: FormGroup) {
    this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
  }

  private static readonly formName = 'PARTSPACKINGMASTERINQUIRY';
  private static readonly showTitleBar = false;
  private static readonly x = 0;
  private static readonly y = 0;
  private static readonly width = '1350px';
  private static readonly height = '750px';
  private static readonly isCenteredToWindow = true;
  private static readonly shouldCloseOnBackgroundClick = false;
  private static readonly isResizable = true;
  private static readonly isMovable = true;

  X() { return PARTSPACKINGMASTERINQUIRY.x; }
  Y() { return PARTSPACKINGMASTERINQUIRY.y; }
  Width() { return PARTSPACKINGMASTERINQUIRY.width; }
  Height() { return PARTSPACKINGMASTERINQUIRY.height; }
  IsCenteredToWindow() { return PARTSPACKINGMASTERINQUIRY.isCenteredToWindow; }
  FormName() { return PARTSPACKINGMASTERINQUIRY.formName; }
  ShowTitleBar() { return PARTSPACKINGMASTERINQUIRY.showTitleBar; }
  ShouldCloseOnBackgroundClick() { return PARTSPACKINGMASTERINQUIRY.shouldCloseOnBackgroundClick; }
  IsResizable() { return PARTSPACKINGMASTERINQUIRY.isResizable; }
  IsMovable() { return PARTSPACKINGMASTERINQUIRY.isMovable; }

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