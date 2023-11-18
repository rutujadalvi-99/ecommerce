import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailer-details',
  templateUrl: './retailer-details.component.html',
  styleUrls: ['./retailer-details.component.scss']
})
export class RetailerDetailsComponent implements OnInit {
  retailers: any[] = [];
  products: any[] = [];

  id!: number;
  name!: string;
  email!: string;
  location!: string;
  password!: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/retailer/retailerD').subscribe(
      (data) => {
        this.retailers = data;
        console.log(data);
      }
    );
  }

  updateReatailer(retailerId: number): void {
    const url = `http://localhost:8080/api/admin/retailer/update/${retailerId}`;
    this.http.put<any[]>(url, { /* Provide your update data here */ }).subscribe(() => {
      console.log(`Retailer with ID ${retailerId} updated successfully.`);
    });
  }

  deleteRetailer(retailerId: number): void {
    const url = `http://localhost:8080/api/admin/retailer/delete/${retailerId}`;
    this.http.delete<any[]>(url).subscribe(() => {
      console.log(`Retailer with ID ${retailerId} deleted successfully.`);
    });
  }
}
