import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<any>('https://dummyjson.com/products');
  }
  getProductsById(id: number) {
    return this.http.get<any>('https://dummyjson.com/products/' + id);
  }
}
