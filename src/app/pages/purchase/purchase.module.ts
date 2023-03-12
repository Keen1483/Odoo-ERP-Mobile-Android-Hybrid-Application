import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchasePageRoutingModule } from './purchase-routing.module';

import { PurchasePage } from './purchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchasePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PurchasePage]
})
export class PurchasePageModule {}
