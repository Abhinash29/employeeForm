import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import{Task} from "./task";



@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  url1:string='http://localhost:3000/tasks/';

  constructor(private _http:HttpClient) { }
  getAlltasks() {
    return this. _http.get<Task[]>(this.url1);
  }
  addtask(item:Task)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('content-Type','application/json');
    return this._http.post(this.url1,body,{headers:head});
  }
     deletetask(id) {
    let head=new HttpHeaders().set('content-Type','application/json');
    return this._http.delete(this.url1+id, { headers:head });
   }
}
