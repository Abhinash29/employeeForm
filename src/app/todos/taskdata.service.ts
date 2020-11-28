import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Product } from './product';
@Injectable({
  providedIn: 'root',
})
export class TaskDataService {
  url: string = 'http://localhost:3000/tasks/';
  url_users: string = 'http://localhost:3000/user_tbl/';
  url_products: string = 'http://localhost:3000/product_tbl/';
  constructor(private _http: HttpClient) {}
  getAllTasks() {
    return this._http.get(this.url);
  }
  getTaskById(id){
    return this._http.get(this.url+id);
  }
  addTask(item : Todo) {
    let head = new HttpHeaders().set('Content-type','application/json');
  let body = JSON.stringify(item);
  return this._http.post(this.url, body, { headers: head });
  }

  deleteTask(id) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + id, { headers: head });
  }
//    updateTask(id, todo: Todo) {
//     const headers = { 'content-type': 'application/json' };
//     const body = JSON.stringify(todo);
//      console.log(body);
//      return this._http.put(this.url + '/' + id, todo, {
//       headers: headers
//      });
//  }

 editTask(items:Todo){
  let head = new HttpHeaders().set('Content-type','application/json');
  let body =JSON.stringify(items);
  return this._http.put(this.url+items.task_id,body, {headers:head} );

}
  //User Part

  getAllUsers() {

    return this._http.get<Employee[]>(this.url_users);
  }
     getEmployeeById(Id1){
      return this._http.get(this.url_users+Id1);
     }
    adduser_tbl(todo: Employee) {
      let head = new HttpHeaders().set('Content-type','application/json');
    let body = JSON.stringify(todo);
    return this._http.post<Employee>(this.url_users, body, { headers: head });
  }
  deleteuser_tbl(ID) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url_users + ID,{ headers:head });
  }
  edituser(items:Employee){
    let head = new HttpHeaders().set('Content-type','application/json');
    let body =JSON.stringify(items);
    return this._http.put(this.url_users+items.user_name,body, {headers:head} );

  }
  //Product Part
  getAllProduct() {
    return this._http.get(this.url_products);
  }
  getProductById(Id2){
    return this._http.get(this.url_products + Id2);
 }
 addproduct_tbl(todo: Product){
  let head = new HttpHeaders().set('Content-type','application/json');
let body = JSON.stringify(todo);
return this._http.post<Product>(this.url_products, body, {headers: head});
}

  deleteProduct_tbl(Id) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url_products + Id,{ headers:head });
  }
  editproduct(items:Product){
    let head = new HttpHeaders().set('Content-type','application/json');
    let body =JSON.stringify(items);
    return this._http.put(this.url_products +items.pro_id, body, {headers:head} );

  }

}
