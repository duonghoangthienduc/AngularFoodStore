import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartItem } from 'src/app/models/cartItem.model';
import { Product } from 'src/app/models/product.model';
import { CartOnlServiceService } from 'src/app/services/cartOnlineService/cart-onl-service.service';
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
  cartLength = 0;
  cartNumber = 0;
  cart: Cart[] = [];
  id = 0;

  constructor(private prodService:ProductService,
              private cartService:CartService,
              private cartOnlService: CartOnlServiceService,
              private route: ActivatedRoute,
              private messageService: NzMessageService,) { }


  ngOnInit(): void{
    this.route.paramMap.pipe(map(val => val.get('id'))).subscribe(val => {
      if(this.product != null){
        this.getProductDetail(parseInt(val as string))
      }
    })
    this.cartOnlService.getAllCart().subscribe((listCart:any)=>{
      this.cart = listCart
      this.id = this.cart.length+1;
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
    const productId = product.productId;
    const productName = product.productName;
    const image = product.image;
    const cartId = this.getCartId();

    this.cartService.addToCart({cartId, productId, quantity, price}, {productId, productName, price, image});

    this.messageService.success('Thêm thành công sản phẩm vào giỏ hàng');
  }

  getCartId(){
    this.cartService.cartTotalObservable().subscribe((total: number) => {
      this.cartLength = total;
    });
    if(this.cartLength == 0){
      console.log(this.id)
      this.cartService.setCartId(this.id)
      this.cartNumber = this.cartService.getCartId();
    }
    else{
      this.cartNumber = this.cartService.getCartId();
    }
    return this.cartNumber;
  }

  getRandomId(max:number){
    return Math.floor(Math.random() * max);
  }

}
