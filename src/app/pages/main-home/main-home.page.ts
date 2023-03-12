import { Component, OnInit } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-main-home',
    templateUrl: './main-home.page.html',
    styleUrls: ['./main-home.page.scss'],
})
export class MainHomePage implements OnInit {

    constructor(private inAppBrowser: InAppBrowser) { }

    ngOnInit() {
    }

    opentab1(){
        this.inAppBrowser.create("https://www.google.com",'_blank');
      }

    opentab2(){
    this.inAppBrowser.create("https://www.google.com",'_blank');
    }

    opentab3(){
    this.inAppBrowser.create("https://www.google.com",'_blank');
    }

}
