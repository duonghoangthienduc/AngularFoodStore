import { Component, Input, OnInit } from '@angular/core';
import { CategoryProduct } from 'src/app/models/categoryProduct.model';

import { ProductService } from 'src/app/services/productService/product.service';



@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  dataProds:CategoryProduct[]= [];
  nameTag: String = '';
  show:boolean = true;
  @Input('id') id:number = 0;

  constructor(private prod:ProductService) { }

  ngOnInit(): void {
    this.getProdByCate(this.id);
  }

  getProdByCate(id:number){
    this.prod.getProductsByCategory(id).subscribe((data:any)=>{
      if(data != 0){
        this.dataProds = data;
        this.nameTag = data[0].categoryName;
        this.show = false;
      }
    })
  }

}
