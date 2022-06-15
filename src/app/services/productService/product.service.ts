import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

import { TagProduct } from 'src/app/models/tagProduct.model';
import { CategoryProduct } from 'src/app/models/categoryProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOption={
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  };

  prodUrl ='http://localhost:1803/product';

  tagProdUrl = 'http://localhost:1803/product-tag';

  categoryUrl = 'http://localhost:1803/product-category';

  constructor(private http:HttpClient) { }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.prodUrl}`).pipe();
  }

  getProduct(id:number): Observable<Product> {
    return this.http.get<Product>(`${this.prodUrl}/${id}`);
  }

  getTagProduct(id:number): Observable<TagProduct[]>{
    return this.http.get<TagProduct[]>(`${this.tagProdUrl}/${id}`);
  }

  getProductsByCategory(id:number): Observable<CategoryProduct[]>{
    return this.http.get<CategoryProduct[]>(`${this.categoryUrl}/${id}`);
  }
}
