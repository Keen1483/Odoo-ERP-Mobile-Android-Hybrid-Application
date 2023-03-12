import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoitOfSalePageRoutingModule } from './poit-of-sale-routing.module';

import { PoitOfSalePage } from './poit-of-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoitOfSalePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PoitOfSalePage]
})
export class PoitOfSalePageModule {}
