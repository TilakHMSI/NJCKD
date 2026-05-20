import { Component } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DATAEXPORTFOREXCISEREPORT.mg.controls.g";
import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CKDP0120PCEngineDetails_DATAEXPORTFOREXCISEREPORT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DATAEXPORTFOREXCISEREPORT.component.html'
})
export class DATAEXPORTFOREXCISEREPORT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DATAEXPORTFOREXCISEREPORT";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "320px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return DATAEXPORTFOREXCISEREPORT.x;
    }
    Y() {
        return DATAEXPORTFOREXCISEREPORT.y;
    }
    Width(): string {
        return DATAEXPORTFOREXCISEREPORT.width;
    }
    Height(): string {
        return DATAEXPORTFOREXCISEREPORT.height;
    }
    IsCenteredToWindow() {
        return DATAEXPORTFOREXCISEREPORT.isCenteredToWindow;
    }
    FormName() {
        return DATAEXPORTFOREXCISEREPORT.formName;
    }
    ShowTitleBar() {
        return DATAEXPORTFOREXCISEREPORT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DATAEXPORTFOREXCISEREPORT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DATAEXPORTFOREXCISEREPORT.isResizable;
    }
    IsMovable() {
        return DATAEXPORTFOREXCISEREPORT.isMovable;
    }


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