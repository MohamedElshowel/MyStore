import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
