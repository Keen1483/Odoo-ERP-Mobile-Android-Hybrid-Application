import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-sale',
    templateUrl: './sale.page.html',
    styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {

    saleForm: FormGroup;
    formVisible = false;
    manageConnexionVisible = false;

    constructor(private formBuilder: FormBuilder,
                private inAppBrowser: InAppBrowser) { }

    ngOnInit() {
        this.initForm();
    }

    initForm(): void {
        this.saleForm = this.formBuilder.group({
            host: ['', [Validators.required]],
            port: ['', [Validators.required, Validators.pattern(/^[0-9]{4,}$/)]]
        });
    }

    onSubmitForm(): void {
        const host = this.saleForm.get('host').value;
        const port = this.saleForm.get('port').value;
        this.launchSaleModule(host, port);
    }

    launchSaleModule(host: string, port: string){
        // Model URL
        // http://localhost:8069/web#cids=1&action=294&model=sale.order&view_type=list&menu_id=182
        // http://localhost:8069/web#cids=1&menu_id=182&action=294&model=sale.order&view_type=list

        const urlRoute: string = 'http://'+host+':'+port+'/web#cids=1&menu_id=182&action=294&model=sale.order&view_type=list';
        this.inAppBrowser.create(urlRoute, '_blank');
    }

    launchSaleModuleSkip(){

        const urlRoute = 'http://192.168.1.10:8015/web#cids=1&menu_id=182&action=294&model=sale.order&view_type=list';
        this.inAppBrowser.create(urlRoute, '_blank');
    }

    // CSS METHODS
    displayHiddenBlock(): void {
        this.formVisible = true;
        this.manageConnexionVisible = true;
    }

}
