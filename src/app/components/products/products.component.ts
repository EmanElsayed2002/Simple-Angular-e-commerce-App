import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/products/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IProduct } from '../../Models/Product.models';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: any[] = [];
  constructor(private service: ApiService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.service.getProducts().subscribe((product) => {
      this.products = product.products;
      console.log(this.products);
    });
  }
}
