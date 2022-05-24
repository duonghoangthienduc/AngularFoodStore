import { Product } from "./product.model";

export class CartItem{
  id ?: number;
  cartId ?: number;
  product!: Product;
  quantity = 0;
  price = 0;
  checked?:boolean = false;
}
