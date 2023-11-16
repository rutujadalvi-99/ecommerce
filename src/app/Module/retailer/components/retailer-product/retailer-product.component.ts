// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
    let url = "http://localhost:8080/add-product";
    this.http.post(url, this.product, { responseType: 'text'}).subscribe(data => {
      alert(data);
    })
  }
}

export class Product {
  id!: any;
  title!: string;
  description!: string;
	size!: string;
  quantity!: any;
  price!: any;
  discountPrice!: any;
  discountPercentage!: any;
	img!: string;
}

