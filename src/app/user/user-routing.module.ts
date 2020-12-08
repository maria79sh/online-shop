import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const userRoutes : Routes = [
    {path : 'login' ,component : LoginComponent},
    {path : 'register' ,component : RegisterComponent},
];

@NgModule({
    imports : [
        RouterModule.forChild(userRoutes)
    ],
    exports : [RouterModule]
})

export class UserRoutingModule{

}