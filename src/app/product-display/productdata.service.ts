import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import{Product} from "./product";


@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  url2:string='http://localhost:3000/product_tbl/';


  constructor(private _http:HttpClient) { }
  show() {
    return this. _http.get<Product[]>(this.url2);
  }
  addProduct(item:Product)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('content-Type','application/json');
    return this._http.post(this.url2,body,{headers:head});
  }
  deleteProduct(pro_id) {
    let head=new HttpHeaders().set('content-Type','application/json');
    return this._http.delete(this.url2+ pro_id, { headers:head });
   }
}


