import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private router:Router, private http: HttpClient){}
  
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

  login: Login = new Login();
  messageIfAny!: string;

  loginCheck() {
    let url = "";
    this.http.post<any>(url, this.login).subscribe(data => {
      console.log(data);
      if(data.status == true) {
        sessionStorage.setItem('customerId', data.customerId);
        sessionStorage.setItem('name', data.name);
        this.router.navigate(['/dashboard'])
      }
      else
        this.messageIfAny = data.messageIfAny;
    })
  }

  }


export class Login {
  email!: string;
  password!: string;
  data:any;

}




