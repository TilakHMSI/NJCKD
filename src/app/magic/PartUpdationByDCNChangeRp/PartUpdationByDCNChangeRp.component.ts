import { Component } from '@angular/core';

import {  FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PartUpdationByDCNChangeRp.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PartUpdationByDCNChangeRp_PartUpdationByDCNChangeRp',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PartUpdationByDCNChangeRp.component.html'
})
export class PartUpdationByDCNChangeRp extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PartUpdationByDCNChangeRp";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "400px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PartUpdationByDCNChangeRp.x;
    }
    Y() {
        return PartUpdationByDCNChangeRp.y;
    }
    Width(): string {
        return PartUpdationByDCNChangeRp.width;
    }
    Height(): string {
        return PartUpdationByDCNChangeRp.height;
    }
    IsCenteredToWindow() {
        return PartUpdationByDCNChangeRp.isCenteredToWindow;
    }
    FormName() {
        return PartUpdationByDCNChangeRp.formName;
    }
    ShowTitleBar() {
        return PartUpdationByDCNChangeRp.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PartUpdationByDCNChangeRp.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PartUpdationByDCNChangeRp.isResizable;
    }
    IsMovable() {
        return PartUpdationByDCNChangeRp.isMovable;
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