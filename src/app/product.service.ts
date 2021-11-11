
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Album } from './album';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl:string = '../assets/album.json';

  constructor(private _http: Http) { }
  getAlbum(id:number):Observable<Album>{
   return this._http.get(this._albumUrl).map((res: { json: () => Album; }) => res.json());
  }
 
} 
