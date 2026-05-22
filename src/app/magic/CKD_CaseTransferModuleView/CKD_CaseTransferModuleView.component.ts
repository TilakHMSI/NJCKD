import { Component } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKD_CaseTransferModuleView.mg.controls.g";
import { MgDisplayedColumns } from "./CKD_CaseTransferModuleView.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKD_CaseTransferModuleView_CKD_CaseTransferModuleView',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './CKD_CaseTransferModuleView.component.html'
})
export class CKD_CaseTransferModuleView extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    
    private static readonly formName: string = "CKD_CaseTransferModuleView";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "850px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CKD_CaseTransferModuleView.x;
    }
    Y() {
        return CKD_CaseTransferModuleView.y;
    }
    Width(): string {
        return CKD_CaseTransferModuleView.width;
    }
    Height(): string {
        return CKD_CaseTransferModuleView.height;
    }
    IsCenteredToWindow() {
        return CKD_CaseTransferModuleView.isCenteredToWindow;
    }
    FormName() {
        return CKD_CaseTransferModuleView.formName;
    }
    ShowTitleBar() {
        return CKD_CaseTransferModuleView.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CKD_CaseTransferModuleView.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CKD_CaseTransferModuleView.isResizable;
    }
    IsMovable() {
        return CKD_CaseTransferModuleView.isMovable;
    }
    
    override displayedColumns = this.mgdp;
override ngOnInit(): void {
        super.ngOnInit();
        const group: FormGroup = this.screenFormGroup;
        (group.controls['vBlob64base'] as FormControl).registerOnChange(this.OnChange.bind(this));
      }
         OnChange() {
        if (
          this.mg.getValue('vBlob64base') !== undefined &&
          this.mg.getValue('vBlob64base') !== null
        ) {
          this.downloadblb2();
        
        }
      }
      downloadblb2() {
        const base64 = this.mg.getValue('vBlob64base');
        if (base64 !== undefined || base64 !== null) {
          const byteCharacters = atob(base64);
          const byteNumbers = new Array(byteCharacters.length);
    
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
    
          const byteArray = new Uint8Array(byteNumbers);
          const binLb2 = new window.Blob([byteArray]);
          if (binLb2.size !== 0) {
            const downloadlink = document.createElement('a');
            const filename = this.mg.getValue(this.mgc.vFileName);
            const linkSource = window.URL.createObjectURL(binLb2);
    
            downloadlink.href = linkSource;
            downloadlink.download = filename;
            downloadlink.click();
            window.URL.revokeObjectURL(linkSource);
          }
        }
    
      }
   
}
