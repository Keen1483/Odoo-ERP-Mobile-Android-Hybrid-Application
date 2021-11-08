import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Platform, AlertController, IonRouterOutlet } from '@ionic/angular';
import { Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

    @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

    lastTimeBackPress = 0;
    timePeriodToExit = 2000;

    constructor(private barcodeScanner: BarcodeScanner,
                private platform: Platform,
                private alertController: AlertController,
                private router: Router,
                private location: Location) {}

    ngOnInit() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
        }).catch(err => {
            console.log('Error', err);
        });
    }

    backButtonEvent() {
        this.platform.backButton.subscribeWithPriority(0, () => {
            this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
                if (this.router.url !== '/home') {
                    await this.location.back();
                } else if (this.router.url === '/home') {
                    if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
                        this.lastTimeBackPress = new Date().getTime();
                        this.presentAlertConfirm();
                    } else {
                        navigator['app'].exitApp();
                    }
                }
            });
        });
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            message: 'Quiter Easy News ?',
            buttons: [{
                text:'Non',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {}
            }, {
                text: 'Oui',
                handler: () => {
                    navigator['app'].exitApp();
                }
            }]
        });

        await alert.present();
    }
}
