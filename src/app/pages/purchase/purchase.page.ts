import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit {

    purchaseForm: FormGroup;
    formVisible = false;
    manageConnexionVisible = false;

    constructor(private formBuilder: FormBuilder,
                private inAppBrowser: InAppBrowser) { }

    ngOnInit() {
        this.initForm();
    }

    initForm(): void {
        this.purchaseForm = this.formBuilder.group({
            host: ['', [Validators.required]],
            port: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]]
        });
    }

    onSubmitForm(): void {
        const host = this.purchaseForm.get('host').value;
        const port = this.purchaseForm.get('port').value;

        this.launchPurchaseModule(host, port);
    }

    launchPurchaseModule(host: string, port: string){
        // Model URL
        // http://localhost:8069/web#cids=1&menu_id=277&action=426&model=purchase.order&view_type=list

        const urlRoute: string = 'http://'+host+':'+port+'/web#cids=1&menu_id=277&action=426&model=purchase.order&view_type=list';
        this.inAppBrowser.create(urlRoute, '_blank');
    }

    launchPurchaseModuleSkip(){

        const urlRoute = 'http://192.168.1.10:8015/web#cids=1&menu_id=277&action=426&model=purchase.order&view_type=list';
        this.inAppBrowser.create(urlRoute, '_blank');
    }

    // CSS METHODS
    displayHiddenBlock(): void {
        this.formVisible = true;
        this.manageConnexionVisible = true;
    }

}
