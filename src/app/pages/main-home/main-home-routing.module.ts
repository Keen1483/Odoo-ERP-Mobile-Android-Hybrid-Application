import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHomePage } from './main-home.page';

const routes: Routes = [
  {
    path: '',
    component: MainHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainHomePageRoutingModule {}
