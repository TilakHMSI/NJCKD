import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  MgFormControlsAccessor,
  MgControlName,
  MgCustomProperties,
  MgDisplayedColumns
} from './PickingListInquiry.mg.controls.g';

import {
  BaseMatTableMagicComponent,
  matMagicProviders
} from '@magic-xpa/angular-material-core';

@Component({
  selector:
    'mga-CKDP0080CaseLabelPrint_DatewiseCartonInquiry_PickingListInquiry',
  providers: [...matMagicProviders],
  standalone: false,
  templateUrl: './PickingListInquiry.component.html'
})
export class PickingListInquiry extends BaseMatTableMagicComponent {

  mgc = MgControlName;
  mgcp = MgCustomProperties;
  mgdp = MgDisplayedColumns;

  mgfc!: MgFormControlsAccessor;

  override displayedColumns = this.mgdp;

  override createFormControlsAccessor(formGroup: FormGroup): void {
    this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    const group: FormGroup = this.screenFormGroup;

    (group.controls['vBlob64base'] as FormControl)
      .registerOnChange(() => this.onChange());

    (group.controls['vBlob64base1'] as FormControl)
      .registerOnChange(() => this.onChange());
  }

  onChange(): void {

    const blob1 = this.mg.getValue('vBlob64base');
    const blob2 = this.mg.getValue('vBlob64base1');

    if (blob1 !== undefined && blob1 !== null) {
      this.downloadBlob(
        blob1,
        this.mg.getValue(this.mgc.vFileName)
      );
    }

    if (blob2 !== undefined && blob2 !== null) {
      this.downloadBlob(
        blob2,
        this.mg.getValue(this.mgc.vFileName1)
      );
    }
  }

  private downloadBlob(base64: string, filename: string): void {

    if (!base64) {
      return;
    }

    try {

      const byteCharacters = atob(base64);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray]);

      if (blob.size > 0) {

        const downloadLink = document.createElement('a');
        const linkSource = window.URL.createObjectURL(blob);

        downloadLink.href = linkSource;
        downloadLink.download = filename || 'download';
        downloadLink.click();

        window.URL.revokeObjectURL(linkSource);
      }

    } catch (error) {
      console.error('Error while downloading file:', error);
    }
  }
}