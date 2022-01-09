import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path : "",redirectTo : "products",pathMatch : "full"},
  {path : "products",component:ProductsComponent},
  {path : "orders",component:OrdersComponent},
  {path : "products/:productId",component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],




exports: [RouterModule]
})
export class AppRoutingModule { }

//
