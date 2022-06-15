import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cartItem.model';
import * as Rx from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new Rx.BehaviorSubject<CartItem[]>([]);
  private cartTotalSubject = new Rx.BehaviorSubject(0);
  private totalItemSubject = new Rx.BehaviorSubject(0);
  private totalPriceSubject = new Rx.BehaviorSubject(0);
  private CartIdSubject = new Rx.BehaviorSubject(0);

  cartTotalObservable(): Observable<number> {
    return this.cartTotalSubject.asObservable();
  }

  // cartIdObservable(): Observable<number> {
  //   return this.CartIdSubject.asObservable();
  // }

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
    const cartIdStorage = window.sessionStorage.getItem('cart-id');
    if(cartIdStorage){
      this.CartIdSubject.next(parseInt(cartIdStorage));
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
        if (cart.productId === productID) {
          cart.quantity = quantity;
        }
      });
      this.updateCart(listCart);
    } else if (quantity === 0) {
      let newListCart: CartItem[] = listCart.filter((cart: CartItem) => {
        return cart.productId !== productID;
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

  clearCartId():void{
    window.sessionStorage.removeItem('cart-id');
  }

  setCartId(cartId:number):void {
    window.sessionStorage.setItem('cart-id', cartId.toString());
  }

  getCartId():any{
    const id = window.sessionStorage.getItem('cart-id');
    if(id){
      return parseInt(id)
    }
    else
      return null;
  }

  clearCart(){
    localStorage.removeItem('cart-list');
  }

  deleteCart(productID: number): void {
    let listCart: CartItem[] = this.cartSubject.value;

    let newListCart: CartItem[] = listCart.filter((cart: CartItem, index) => {
      return cart.productId !== productID;
    });

    this.updateCart(newListCart);
  }

  addToCart(cart: CartItem, product: Product) {
    let listCart = this.cartSubject.value;
    const checkCartExistIndex = () => {
      let index: number = -1;
      return new Promise((reslove, reject) => {
        try {
          for (let i = 0; i < listCart.length; i++) {
            if (listCart[i].productId === product.productId) {
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
