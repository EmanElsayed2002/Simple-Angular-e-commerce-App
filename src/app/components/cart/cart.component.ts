import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Service/cart/cart.service';
import { IProduct } from '../../Models/Product.models';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  constructor(private service: CartService) {}
  ngOnInit(): void {
    this.getProductsForCart();
    console.log(this.cartItems);
  }
  getProductsForCart() {
    this.cartItems = this.service.getCartItems();
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }
  decreaseQuantity(item: any) {
    if (item.quantity > 0) item.quantity--;
  }
  removeItem(item: any) {
    this.service.removeFromCart(item.id);
    this.getProductsForCart();
  }
  getTotal() {
    return this.cartItems.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0
    );
  }
}
