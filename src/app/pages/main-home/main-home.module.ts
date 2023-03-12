import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainHomePageRoutingModule } from './main-home-routing.module';

import { MainHomePage } from './main-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainHomePageRoutingModule
  ],
  declarations: [MainHomePage]
})
export class MainHomePageModule {}
