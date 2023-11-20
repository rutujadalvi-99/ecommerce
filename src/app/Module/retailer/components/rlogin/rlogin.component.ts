import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{FormsModule} from '@angular/forms'

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.scss']
})

export class RloginComponent {

  showLogin = true;
  OpenToRegister(){
    this.showLogin = true;
  }

  OpenToSignup(){
    this.showLogin=false;
  }

  login: Login = new Login();

   register: Register=new Register();
 
  messageIfAny!: string;
  data!: any;

  constructor(private http: HttpClient , private router: Router) { }


  registerCheck() {
    let url = `http://localhost:8080/api/retailer/register`;
    this.http.post<any>(url, this.register).subscribe(data => {
      console.log(data);
      if(data.status == true) {
        localStorage.setItem('retailerId', data.retailerId);
        this.router.navigate(['/'])
      }
      else
        this.messageIfAny = data.messageIfAny;
    })
  }


  loginCheck() {
    let url = `http://localhost:8080/api/retailer/login`;
    this.http.post<any>(url, this.login).subscribe(data => {
      console.log(data);
      if(data.status == true) {
        sessionStorage.setItem('retailerId', data.retailerId);
        sessionStorage.setItem('name', data.name);
        this.router.navigate(['/retailer']);
      }
      else
        this.messageIfAny = data.messageIfAny;
    })
  }
  }

  export class Login {
    email!: string;
    password!: string;
    retailerId: number | undefined;
  }

  export class Register{
    name!: string;
    location!: string;
    email!: string;
    password!: string;

  }



