import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listCart: CartItem[] = [];
  cartLength = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartTotalObservable().subscribe((total: number) => {
      this.cartLength = total;
    });
  }

}
