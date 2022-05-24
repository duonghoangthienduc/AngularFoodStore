import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cartItem.model';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new Rx.BehaviorSubject<CartItem[]>([]);
  private cartTotalSubject = new Rx.BehaviorSubject(0);
  private totalItemSubject = new Rx.BehaviorSubject(0);
  private totalPriceSubject = new Rx.BehaviorSubject(0);

  cartTotalObservable(): Observable<number> {
    return this.cartTotalSubject.asObservable();
  }

  cartObservable(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  constructor() {
    const listCartInStorage = localStorage.getItem('cart-list');
    if (listCartInStorage) {
      const listCart: CartItem[] = JSON.parse(listCartInStorage);
      this.cartSubject.next(listCart);
      this.cartTotalSubject.next(this.cartSubject.value.length);
      this.updateTotalItem(listCart);
      this.updateTotalPrice(listCart);
    }
  }

  updateTotalItem(listCart: CartItem[]): void {
    let sumTotalItem = () => {
      let totalItem = 0;
      return new Promise((reslove, reject) => {
        listCart.forEach((cart: CartItem) => {
          totalItem += cart.quantity;
        });
        reslove(totalItem);
      });
    };

    sumTotalItem().then((sum: any) => {
      this.totalItemSubject.next(sum);
    });
  }

  updateTotalPrice(listCart: CartItem[]) {
    const getTotalPrice = () => {
      let totalPrice: number = 0;
      return new Promise((reslove, reject) => {
        listCart.forEach((cart: CartItem) => {
          totalPrice += cart.quantity * cart.price;
        });
        reslove(totalPrice);
      });
    };
    getTotalPrice().then((totalPrice: any) => {
      this.totalPriceSubject.next(totalPrice);
    });
  }

  updateCartAmount(productID: number, quantity: number) {
    let listCart: CartItem[] = this.cartSubject.value;
    if (quantity > 0) {
      listCart.map((cart: CartItem) => {
        if (cart.product.productId === productID) {
          cart.quantity = quantity;
        }
      });
      this.updateCart(listCart);
    } else if (quantity === 0) {
      let newListCart: CartItem[] = listCart.filter((cart: CartItem) => {
        return cart.product.productId !== productID;
      });
      this.updateCart(newListCart);
    } else {
      return;
    }
  }

  updateCart(listCart: CartItem[]): void {
    this.cartSubject.next(listCart);
    this.cartTotalSubject.next(listCart.length);
    this.updateTotalItem(listCart);
    this.updateTotalPrice(listCart);
    localStorage.setItem('cart-list', JSON.stringify(this.cartSubject.value));
  }

  deleteCart(productID: number): void {
    let listCart: CartItem[] = this.cartSubject.value;

    let newListCart: CartItem[] = listCart.filter((cart: CartItem) => {
      return cart.product.productId !== productID;
    });

    this.updateCart(newListCart);
  }

  addToCart(cart: CartItem) {
    let listCart = this.cartSubject.value;
    const checkCartExistIndex = () => {
      let index: number = -1;
      return new Promise((reslove, reject) => {
        try {
          for (let i = 0; i < listCart.length; i++) {
            if (listCart[i].product.productId === cart.product.productId) {
              index = i;
            }
          }
          reslove(index);
        } catch (error) {
          reject(error);
        }
      });
    };
    checkCartExistIndex().then((index: any) => {
      if (index !== -1) {
        listCart[index].quantity = cart.quantity + listCart[index].quantity;
      } else {
        listCart.push(cart);
      }

      this.updateCart(listCart);
    });
  }
  totalItemObservable(): Observable<number> {
    return this.totalItemSubject.asObservable();
  }

  totalPriceObservable(): Observable<number> {
    return this.totalPriceSubject.asObservable();
  }

}
