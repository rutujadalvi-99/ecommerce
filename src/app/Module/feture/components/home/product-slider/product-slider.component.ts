import { Component ,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent  {
@Input() title:any
@Input() products:any





}


