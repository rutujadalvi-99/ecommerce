import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FetureModule } from './Module/feture/feture.module';
import { SharedModule } from './Module/shared/shared.module';
import { AdminModule } from './Module/admin/admin.module';
import { RetailerModule } from './Module/retailer/retailer.module';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> a68de15cb21f55e89152131a62b318fe79945b29


@NgModule({
  declarations: [
    AppComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FetureModule,
    SharedModule,
    AdminModule,
    RetailerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
