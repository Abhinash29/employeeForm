import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import{User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url:string='http://localhost:3000/user_tbl/';

  constructor(private _http:HttpClient) {}
   getAllUsers(){
     return this. _http.get<User[]>(this.url);
   }
   addUser(item:User)
   {
     let body=JSON.stringify(item);
     let head=new HttpHeaders().set('content-Type','application/json');
     return this._http.post(this.url,body,{headers:head});
   }
   deleteUser(id){
    let head=new HttpHeaders().set('content-Type','application/json');
    return this._http.delete(this.url+id, { headers:head });
   }
}

