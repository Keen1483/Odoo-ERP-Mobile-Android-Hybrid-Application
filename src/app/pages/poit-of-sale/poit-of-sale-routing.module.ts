import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoitOfSalePage } from './poit-of-sale.page';

const routes: Routes = [
  {
    path: '',
    component: PoitOfSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoitOfSalePageRoutingModule {}
