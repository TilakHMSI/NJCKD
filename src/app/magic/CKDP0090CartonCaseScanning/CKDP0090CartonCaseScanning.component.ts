import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDP0090CartonCaseScanning.mg.controls.g";
import { MagicServices, TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";
import { MagicModalInterface } from "@magic-xpa/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'mga-CKDP0090CartonCaseScanning_CKDP0090CartonCaseScanning',
  providers: [...magicProviders],
  standalone: false,
  templateUrl: './CKDP0090CartonCaseScanning.component.html'
})
export class CKDP0090CartonCaseScanning extends TaskBaseMagicComponent implements MagicModalInterface {

  mgc = MgControlName;
  mgcp = MgCustomProperties;
  mgfc!: MgFormControlsAccessor;
  weightValue: any;
  override createFormControlsAccessor(formGroup: FormGroup) {
    this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
  }
  private static readonly formName: string = "CKDP0090CartonCaseScanning";
  private static readonly showTitleBar: boolean = false;
  private static readonly x: number = 0;
  private static readonly y: number = 0;
  private static readonly width: string = "1500px";
  private static readonly height: string = "800px";
  private static readonly isCenteredToWindow: boolean = true;
  private static readonly shouldCloseOnBackgroundClick: boolean = false;
  private static readonly isResizable: boolean = true;
  private static readonly isMovable: boolean = true;
  X() {
    return CKDP0090CartonCaseScanning.x;
  }
  Y() {
    return CKDP0090CartonCaseScanning.y;
  }
  Width(): string {
    return CKDP0090CartonCaseScanning.width;
  }
  Height(): string {
    return CKDP0090CartonCaseScanning.height;
  }
  IsCenteredToWindow() {
    return CKDP0090CartonCaseScanning.isCenteredToWindow;
  }
  FormName() {
    return CKDP0090CartonCaseScanning.formName;
  }
  ShowTitleBar() {
    return CKDP0090CartonCaseScanning.showTitleBar;
  }
  ShouldCloseOnBackgroundClick() {
    return CKDP0090CartonCaseScanning.shouldCloseOnBackgroundClick;
  }
  IsResizable() {
    return CKDP0090CartonCaseScanning.isResizable;
  }
  IsMovable() {
    return CKDP0090CartonCaseScanning.isMovable;
  }
  constructor(

    ref: ChangeDetectorRef,

    magicServices: MagicServices,

    private http: HttpClient

  ) {

    super(ref, magicServices);

  }

  override ngOnInit(): void {
    super.ngOnInit();
    const group: FormGroup = this.screenFormGroup;
    (group.controls['vBlob64base'] as FormControl).registerOnChange(this.OnChange.bind(this));
    (group.controls['vWeightCheck'] as FormControl).registerOnChange(this.OnChange1.bind(this));
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


  OnChange1() {
    if (
      this.mg.getValue('vWeightCheck') !== undefined &&
      this.mg.getValue('vWeightCheck') !== null &&
      this.mg.getValue('vWeightCheck') !== 0
    ) {
      this.openApp();

    }
  }

  openApp() {

    const url = 'http://127.0.0.1:8000/open-app';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<any>(url, { app_name: 'xpa' }, { headers }).subscribe({

      next: (res: { weight: any; }) => {

        console.log('API response:', res);

        const raw = (res?.weight || '').toString();
        // Get first line only
        const firstLine = raw.split('\n')[0] || '';
        // const parts = raw.split('|');
                // this.weightValue = parts.length > 1 ? parts[1].trim() : raw.trim();
                this.weightValue = firstLine.slice(1); 
                console.log('weightValue', this.weightValue);
                this.mg.setValueToControl('Case__Carton_Weight_v', this.weightValue);
      },

      error: (err: any) => {
        console.error('Error:', err);
        this.weightValue = '';
      }
    });

  }

  // onOpenClick() {

  //   this.openApp();

  // }


}
