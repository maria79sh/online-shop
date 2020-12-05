import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  display = false;

  onPress(){
    this.display = !this.display;
  }
}
