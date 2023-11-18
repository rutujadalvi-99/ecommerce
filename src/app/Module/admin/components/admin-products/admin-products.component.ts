import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent {
  products: any[] = [];
  imageUrl!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/admin/products/all')
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
      })
  }
  
  deleteProduct(id: number): void {
    const url = `http://localhost:8080/api/admin/products/delete/${id}`;
    
    this.http.delete<any[]>(url).subscribe(
      () => {
        console.log(`Item with ID ${id} deleted successfully.`);
        
    });
    

  }
}