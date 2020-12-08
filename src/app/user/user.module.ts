import { NgModule } from '@angular/core';
import { UserComponent } from './components/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordComponent } from './components/login/password/password.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
    declarations : [
        UserComponent,
        LoginComponent,
        RegisterComponent,
        PasswordComponent
    ],

    imports : [
        CommonModule,
        UserRoutingModule
    ]

})
export class UserModule {
}