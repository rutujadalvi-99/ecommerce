import { Component } from '@angular/core';

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.scss']
})
export class RloginComponent {

  showLogin = false;
  OpenToRegister(){
    this.showLogin = true;
  }

  OpenToSignup(){
    this.showLogin=false;
  }

}
