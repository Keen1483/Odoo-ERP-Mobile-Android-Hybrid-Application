import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

    inventoryForm: FormGroup;
    formVisible = false;
    manageConnexionVisible = false;

    constructor(private formBuilder: FormBuilder,
                private inAppBrowser: InAppBrowser) {}

    ngOnInit() {
        this.initForm();
    }

    initForm(): void {
        this.inventoryForm = this.formBuilder.group({
            host: ['', [Validators.required]],
            port: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]]
        });
    }

    onSubmitForm(): void {
        const host = this.inventoryForm.get('host').value;
        const port = this.inventoryForm.get('port').value;

        this.launchInventoryModule(host, port);
    }

    launchInventoryModule(host: string, port: string){
        // Model URL
        // http://localhost:8069/web#cids=1&menu_id=210&action=366&model=stock.picking.type&view_type=kanban

        const urlRoute: string = 'http://'+host+':'+port+'/web#cids=1&menu_id=210&action=366&model=stock.picking.type&view_type=kanban';
        this.inAppBrowser.create(urlRoute, '_blank');
    }

    launchInventoryModuleSkip(){

        const urlRoute = 'http://192.168.1.10:8015/web#cids=1&menu_id=210&action=366&model=stock.picking.type&view_type=kanban';
        this.inAppBrowser.create(urlRoute, '_blank');
    }

    // CSS METHODS
    displayHiddenBlock(): void {
        this.formVisible = true;
        this.manageConnexionVisible = true;
    }

}
