import { Component, HostListenerDecorator, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CartItem } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cartService/cart.service';



@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css']
})
export class CartproductComponent implements OnInit {

  listCart: CartItem[] = [];

  totalAmount: number = 0;
  totalPrice: number = 0;
  isDisabled = true;




  constructor(private cartService: CartService,private messageService: NzMessageService) { }

  ngOnInit(): void {
    this.cartService.cartObservable().subscribe((listCart: CartItem[]) => {
      this.listCart = listCart;
    });

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
          this.isDisabled = !this.isDisabled;

          this.cartService.updateCartAmount(productID, parseInt(amount));
          this.messageService.success('Cập nhật giỏ hàng thành công');
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


}
