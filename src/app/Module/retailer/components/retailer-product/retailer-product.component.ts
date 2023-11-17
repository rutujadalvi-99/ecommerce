// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-retailer-product',
  templateUrl: './retailer-product.component.html',
  styleUrls: ['./retailer-product.component.scss']
})

export class RetailerProductComponent {
  product: Product = new Product();

  constructor(private http: HttpClient) { }

  add() {
    console.log(this.product);
    let url = "http://localhost:8080/api/products/create";
    this.http.post(url, this.product, { responseType: 'text'}).subscribe(data => {
      alert(data);
    })
  }
}

export class Product {
  topLevelCategory!: string ;
  secondLevelCategory!: string;
  thirdLevelCategory!: string;
  title!: string;
  description!: string;
  brand!: string;
	size!: string;
  color!: string;
  quantity!: any;
  price!: any;
  discountPrice!: any;
  discountPercentage!: any;
	img!: string;
}

