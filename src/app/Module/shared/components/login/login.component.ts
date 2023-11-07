import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private router:Router){}
  
  openForget(){
    this.router.navigate(['/forgetPassword']);
  }

  showLogin = false;
  OpenToLogin(){
    this.showLogin = true;
  }

  OpenToSignup(){
    this.showLogin=false;
  }

  

  
}
