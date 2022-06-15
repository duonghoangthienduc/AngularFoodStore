import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Cart } from 'src/app/models/cart.model';

import { CartItem } from 'src/app/models/cartItem.model';
import { Product } from 'src/app/models/product.model';
import { CartOnlServiceService } from 'src/app/services/cartOnlineService/cart-onl-service.service';
import { CartService } from 'src/app/services/cartService/cart.service';
import { ProductService } from 'src/app/services/productService/product.service';




@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css']
})

export class CartproductComponent implements OnInit {

  listCart: CartItem[] = [];
  Prod = new Product ;
  listProd: Product[] = [];
  cartDeatil = new Cart;


  cartId!:number;
  totalAmount: number = 0;
  totalPrice: number = 0;


  constructor(private cartService: CartService,
              private messageService: NzMessageService,
              private productService: ProductService,
              private cartOnlService: CartOnlServiceService,
              private modal: NzModalService,
              private route: Router
              ) { }

  ngOnInit(): void {
    this.cartService.cartObservable().subscribe((listCart:any) => {

      this.listCart = listCart;

      this.listCart.forEach((data)=>{
        this.productService.getProduct(data.productId).subscribe((data)=>{
          if(data){
            this.listProd.push(data);
          }
        });
      })



    });

    // this.productService.getAllProduct().subscribe((data:any)=>{
    //   this.listProd = data
    // })

    this.cartService.cartTotalObservable().subscribe((total: number) => {
      this.totalAmount = total;
    });

    this.cartService.totalPriceObservable().subscribe((total: number) => {
      this.totalPrice = total;
    });

  }

  calcTotalPricePerProduct(amount: number, price: number): string {
    return (amount * price).toString();
  }

  updateCartAmount(amount: string, productID?: number) {
    try {
      if (amount !== '' && productID) {
        if (parseInt(amount) > 0) {
          this.cartService.updateCartAmount(productID, parseInt(amount));
          this.messageService.success('Cập nhật giỏ hàng thành công');
          // window.location.reload()
        } else {
          this.messageService.error('Số lượng phải lớn hơn hoặc bằng 0');
        }
      } else {
        this.messageService.error(
          'Cập nhật giỏ hàng thành thất bại, vui lòng kiểm tra số lượng nhập'
        );
      }
    } catch (err) {
      this.messageService.error(
        'Cập nhật giỏ hàng thành thất bại, vui lòng kiểm tra số lượng nhập'
      );
    }
  }

  deleteCart(productID?: number) {
    if (productID) {
      this.cartService.deleteCart(productID);
      this.messageService.success('Xoá thành công sản phẩm khỏi giỏ hàng');
    }
  }

  showConfirm(TotalPrice:number, cartId:any): void {
    this.modal.confirm({
      nzTitle: '<i>Bạn xác nhận có muốn đặt hàng ?</i>',
      nzContent: '<b>Bạn phải cần điền đầy đủ thông tin để đơn hàng được tiếp tục</b>',
      nzOnOk: () => {
        this.cartOnlService.addNewCart(cartId, TotalPrice).subscribe({
          next: (res) => {
            console.log(res);
            this.cartOnlService.addNewCartItem(this.listCart).subscribe({
              next: (res) => {
                console.log(res);
              },
              error: (e) => console.error(e)
            })
            this.route.navigateByUrl('cart/form-data');
          },
          error: (e) => console.error(e)
        });

      }
    });
  }


}
