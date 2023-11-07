import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.scss']
})
export class RetailerComponent {

  constructor(private router:Router){}

  OpenToAddProduct(){
    this.router.navigate(['/retailerForm']);
  }
  

}
