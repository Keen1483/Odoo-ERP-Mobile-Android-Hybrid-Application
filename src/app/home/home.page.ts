import { Component } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private inAppBrowser: InAppBrowser) {}

    launchSite() {
        // this.inAppBrowser.create('http://app-avenue.herokuapp.com/home', '_blank');
        this.inAppBrowser.create('http://localhost:8069/pos/ui?config_id=1#cids=1', '_blank');
        console.log('Hello !');
    }

}
