import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
    declarations : [
        HomeComponent,
        ProductListComponent,
        ProductDetailComponent,
        ProductItemComponent,
    ],

    imports : [
        CommonModule,
        StoreRoutingModule
    ]

})
export class StoreModule {
}