import { Component, Input, OnInit } from '@angular/core';

import { TagProduct } from 'src/app/models/tagProduct.model';

import { ProductService } from 'src/app/services/productService/product.service';
import SwiperCore, { Autoplay, Pagination, Navigation, Swiper } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination, Navigation]);



@Component({
  selector: 'app-swipe-product',
  templateUrl: './swipe-product.component.html',
  styleUrls: ['./swipe-product.component.css']
})
export class SwipeProductComponent implements OnInit {
  dataProds:TagProduct[] = [];
  titleName:String = '';
  @Input('id') id:number = 0;
  constructor(private prod:ProductService) { }

  ngOnInit(): void {
    this.getTagProd(this.id);
  }

  getTagProd(id:number){
    this.prod.getTagProduct(id).subscribe((data:any)=>{
      if(data != 0 && this.id == 7 ){
        this.dataProds = data;
        this.titleName = data[0].tagName + ' 🔥';
      }
      else{
        this.dataProds = data;
        this.titleName = data[0].tagName;
      }
    })
  }

}
