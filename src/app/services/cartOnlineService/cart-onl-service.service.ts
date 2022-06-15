import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartItem } from 'src/app/models/cartItem.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CartOnlServiceService {
  httpOption={
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  };

  AllCart = 'http://localhost:1803/cart';
  AddCart = 'http://localhost:1803/cart/new-cart';
  AddCartItem = 'http://localhost:1803/cart-detail/add-item';

  constructor(private http:HttpClient) { }

  getAllCart(): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.AllCart}`);
  }

  getCartDetail(id:number): Observable<Cart> {
    return this.http.get<Cart>(`${this.AllCart}/${id}`);
  }

  addNewCart(cartId:any, totalPrice:any): Observable<any>{
    return this.http.post(`${this.AddCart}`, {cartId, totalPrice}, httpOptions)
  }

  addNewCartItem(Cart:CartItem[]): Observable<any>{
    return this.http.post(`${this.AddCartItem}`, { Cart }, httpOptions);
  }
}
