import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'main-home',
    loadChildren: () => import('./pages/main-home/main-home.module').then( m => m.MainHomePageModule)
  },
  {
    path: 'poit-of-sale',
    loadChildren: () => import('./pages/poit-of-sale/poit-of-sale.module').then( m => m.PoitOfSalePageModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./pages/sale/sale.module').then( m => m.SalePageModule)
  },
  {
    path: 'purchase',
    loadChildren: () => import('./pages/purchase/purchase.module').then( m => m.PurchasePageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./pages/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
