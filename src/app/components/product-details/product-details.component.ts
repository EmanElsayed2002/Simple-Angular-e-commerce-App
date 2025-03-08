import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/Product.models';
import { ApiService } from '../../Service/products/api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RatingComponent, CommonModule, HttpClientModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | null = null;

  constructor(private router: ActivatedRoute, private service: ApiService) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const productId = this.router.snapshot.paramMap.get('id');
    if (productId) {
      this.getProductsBy(+productId);
    } else {
      console.error('Invalid product ID');
    }
  }

  getProductsBy(id: number): void {
    this.service.getProductsById(id).subscribe({
      next: (product) => {
        this.product = product;
        console.log(product);
      },
      error: (err) => {
        console.error('Error fetching product details:', err);
      },
    });
  }

  toNumber(value: string | null | undefined): number {
    return value ? Number(value) : 0;
  }
}
