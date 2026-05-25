import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKD_PC_DETAIL_UPLOAD.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKD_PC_DETAIL_UPLOAD_CKD_PC_DETAIL_UPLOAD',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKD_PC_DETAIL_UPLOAD.component.html'
})
export class CKD_PC_DETAIL_UPLOAD extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CKD_PC_DETAIL_UPLOAD";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "700px";
    private static readonly height: string = "200px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CKD_PC_DETAIL_UPLOAD.x;
    }
    Y() {
        return CKD_PC_DETAIL_UPLOAD.y;
    }
    Width(): string {
        return CKD_PC_DETAIL_UPLOAD.width;
    }
    Height(): string {
        return CKD_PC_DETAIL_UPLOAD.height;
    }
    IsCenteredToWindow() {
        return CKD_PC_DETAIL_UPLOAD.isCenteredToWindow;
    }
    FormName() {
        return CKD_PC_DETAIL_UPLOAD.formName;
    }
    ShowTitleBar() {
        return CKD_PC_DETAIL_UPLOAD.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKD_PC_DETAIL_UPLOAD.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKD_PC_DETAIL_UPLOAD.isResizable;
    }
    IsMovable() {
        return CKD_PC_DETAIL_UPLOAD.isMovable;
    }


fileUpload(event: Event): void {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  
  if (!file) {
    console.warn('No file selected');
    return;
  }
  
  // Optional: Validate Excel MIME types
  const excelTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
    'application/vnd.ms-excel' // .xls
  ];
  if (!excelTypes.includes(file.type)) {
    console.error('Please select a valid Excel file');
    return;
  }
  
  const reader = new FileReader();
  reader.readAsDataURL(file);
  
  reader.onload = () => {
    const fullDataUrl = reader.result as string;
    const commaIndex = fullDataUrl.indexOf(',');
    if (commaIndex === -1) {
      console.error('Invalid data URL');
      return;
    }
    
    const base64Data = fullDataUrl.slice(commaIndex + 1);
    this.mg.setValueToControl('vBlob64base', base64Data);
    this.mg.setValueToControl('v_FileName', file.name);
  };
}

}