import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailerRoutingModule } from './retailer-routing.module';
import { RetailerProductComponent } from './components/retailer-product/retailer-product.component';
import { RdetailsComponent } from './components/rdetails/rdetails.component';
import { RetailerdeleteComponent } from './components/retailerdelete/retailerdelete.component';
import { RloginComponent } from './components/rlogin/rlogin.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    RetailerProductComponent,
    RdetailsComponent,
    RetailerdeleteComponent,
    RloginComponent
  ],
  imports: [
    CommonModule,
    RetailerRoutingModule,
    FormsModule
  ]
})
export class RetailerModule { }
