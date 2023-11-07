import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent {
  id!: any;
  orderitems!: any;


  constructor(private http: HttpClient) { }

  show(){
    let url = `http://localhost:8080/order-item?${this.id}`
    alert(this.orderitems);
    // this.http.get<any>(url).subscribe(data => {
    //   this.orderitems = data;
    }

  }




