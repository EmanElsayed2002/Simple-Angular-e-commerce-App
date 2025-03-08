import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../Models/Product.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cartItems: any[] = [];
  Cartcount = new BehaviorSubject<number>(0);
  cartcount$ = this.Cartcount.asObservable();
  addToCart(product: any) {
    const existing = this.cartItems.find((item) => item.id == product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartItems.forEach((element) => {
      console.log(element);
    });
    this.updateCartCount();
  }
  updateCartCount() {
    const count = this.cartItems.reduce(
      (prev, curr) => prev + curr.quantity,
      0
    );
    this.Cartcount.next(count);
  }
  getCartItems() {
    return this.cartItems;
  }
  removeFromCart(product: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== product);
    this.updateCartCount();
  }
  updateQuantity(productId: number, quantity: number) {
    const product = this.cartItems.find((item) => item.id == productId);
    if (product) {
      product.quantity = quantity;
    }
    this.updateCartCount();
  }
}
