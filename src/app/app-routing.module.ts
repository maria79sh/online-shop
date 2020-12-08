import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/components/admin-login/admin-login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './store/components/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  {path : 'admin-login' ,component : AdminLoginComponent},
  {path : 'shopping-cart' ,component : ShoppingCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
