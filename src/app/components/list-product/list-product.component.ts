import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryProduct } from 'src/app/models/categoryProduct.model';

import { ProductService } from 'src/app/services/productService/product.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})

export class ListProductComponent implements OnInit {
  listProduct:CategoryProduct[] = [];

  maLoai:number = 0;

  randomId:number = 0;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.maLoai = this.route.snapshot.params['id'];
    this.randomId = Math.floor(Math.random()*5 - 1)
  }


}
