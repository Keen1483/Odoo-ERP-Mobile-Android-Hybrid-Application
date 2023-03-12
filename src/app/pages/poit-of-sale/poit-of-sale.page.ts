import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-poit-of-sale',
  templateUrl: './poit-of-sale.page.html',
  styleUrls: ['./poit-of-sale.page.scss'],
})
export class PoitOfSalePage implements OnInit {

    posForm: FormGroup;
    formVisible = false;
    manageConnexionVisible = false;

    constructor(private formBuilder: FormBuilder,
                private inAppBrowser: InAppBrowser) { }

    ngOnInit() {
        this.initForm();
    }

    initForm(): void {
        this.posForm = this.formBuilder.group({
            host: ['', [Validators.required]],
            port: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]]
        });
    }

    onSubmitForm(): void {
        const host = this.posForm.get('host').value;
        const port = this.posForm.get('port').value;

        this.launchPosModule(host, port);
    }

    launchPosModule(host: string, port: string){
        // Model URL
        // http://localhost:8069/pos/ui?config_id=1#cids=1
        // http://localhost:8069/web#cids=1&menu_id=252&action=410&model=pos.config&view_type=kanban

        const urlRoute: string = 'http://'+host+':'+port+'/web#cids=1&menu_id=252&action=410&model=pos.config&view_type=kanban';
        this.inAppBrowser.create(urlRoute, '_blank');
    }

    launchPosModuleSkip(){

        const urlRoute = 'http://192.168.1.10:8015/web#cids=1&menu_id=252&action=410&model=pos.config&view_type=kanban';
        this.inAppBrowser.create(urlRoute, '_blank');
    }

    // CSS METHODS
    displayHiddenBlock(): void {
        this.formVisible = true;
        this.manageConnexionVisible = true;
    }

}
