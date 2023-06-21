import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API = "http://localhost:3000/products"
  constructor(
    public http: HttpClient
  ) {  }
  getAllProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.API}`)
  }
  getProductById(id: string): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.API}/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(this.API, product)
  }
  updateProduct(product: IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`${this.API}/${product.id}`, product)
  }
  deleteProduct(id: string): Observable<IProduct>{
    return this.http.delete<IProduct>(`${this.API}/${id}`)
  }

}
