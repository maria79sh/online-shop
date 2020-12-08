import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const storeRoutes : Routes = [
    {path : 'store' ,component : HomeComponent},
];

@NgModule({
    imports : [
        RouterModule.forChild(storeRoutes)
    ],
    exports : [RouterModule]
})

export class StoreRoutingModule{

}