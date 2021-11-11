
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Album } from './album';
import { Product } from './product';
import "rxjs/add/operator/map"


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl:string = '../assets/album.json';
  private _productsUrl:string = '../assets/products.json';

  constructor(private _http: Http) { }

  getAlbum(id:number):Observable<Album>{
   return this._http.get(this._albumUrl).map((response:Album) => response);
  }

  getProducts():Observable<Product[]>{
    return this._http.get(this._productsUrl).map((response:Product) => response);
   }
 
} 
