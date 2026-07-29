import { Component, ChangeDetectorRef } from '@angular/core';

import { FormGroup } from "@angular/forms";

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDMAINMENU.mg.controls.g";

import { TaskBaseMagicComponent, magicProviders, MagicServices } from "@magic-xpa/angular";

@Component({

    selector: 'mga-CKDMAINMENU_CKDMAINMENU',

    providers: [...magicProviders],

    standalone: false,

    templateUrl: './CKDMAINMENU.component.html'

})

export class CKDMAINMENU extends TaskBaseMagicComponent {

    mgc = MgControlName;

    mgcp = MgCustomProperties;

    mgfc!: MgFormControlsAccessor;

    weightValue: string = '';

    constructor(

        ref: ChangeDetectorRef,

        magicServices: MagicServices,

        private http: HttpClient

    ) {

        super(ref, magicServices);

    }

    override createFormControlsAccessor(formGroup: FormGroup) {

        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);

    }

    openApp() {

        const url = 'http://127.0.0.1:8000/open-app';

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        this.http.post<any>(url, { app_name: 'xpa' }, { headers }).subscribe({

            next: (res) => {

                console.log('API response:', res);

                const raw = (res?.weight || '').toString();
                const parts = raw.split('|');
                this.weightValue = parts.length > 1 ? parts[1].trim() : raw.trim();
                this.mg.setValueToControl('vWeight', this.weightValue);
            },

            error: (err) => {

                console.error('Error:', err);

                this.weightValue = '';

            }

        });

    }

    onOpenClick() {

        this.openApp();

    }

}
