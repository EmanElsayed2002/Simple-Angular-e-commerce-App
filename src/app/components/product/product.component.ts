import { Component, Input } from '@angular/core';
import { IProduct } from '../../Models/Product.models';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { Router } from '@angular/router';
import { ApiService } from '../../Service/products/api.service';
import { CartService } from '../../Service/cart/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: IProduct | null = null;
  constructor(private router: Router, private service: CartService) {}
  OnClickOnCard(id: number) {
    this.router.navigate(['product', id]);
  }
  addToCart(product: IProduct) {
    this.service.addToCart(product);
  }
}
