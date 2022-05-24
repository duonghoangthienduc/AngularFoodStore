import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cartService/cart.service';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{
  product = new Product ;
  randomStar = 0;
  quantityProduct:number = 1;
  constructor(private prodService:ProductService,
              private cartService:CartService,
              private route: ActivatedRoute,
              private messageService: NzMessageService) { }


  ngOnInit(): void{
    this.route.paramMap.pipe(map(val => val.get('id'))).subscribe(val => {
      if(this.product != null){
        this.getProductDetail(parseInt(val as string))
      }
    })
  }


  getProductDetail(id:number){
    this.prodService.getProduct(id).subscribe((data:any) =>{
      this.product = data;
      this.randomStar = this.getRandom(3, 5);
    });
  }
  getRandom(max:number, min:number){
    return Math.random() * (max - min) + min;
  }

  getToCart(product:Product){
    const quantity = this.quantityProduct;
    const price = product.price;
    this.cartService.addToCart({product, quantity, price});
    this.messageService.success('Thêm thành công sản phẩm vào giỏ hàng');
  }

}
