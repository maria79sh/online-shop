import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './store/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  {path : 'login' ,component : LoginComponent},
  {path : 'register' ,component : RegisterComponent},
  {path : 'admin-login' ,component : AdminLoginComponent},
  {path : 'store' ,component : ProductsComponent},
  {path : 'shopping-cart' ,component : ShoppingCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
