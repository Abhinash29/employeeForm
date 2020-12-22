import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import{Employee1, Employee2,Employee4,Employee5,Employee6} from "./employee1";

@Injectable({
  providedIn: 'root'
})
export class Employee1dataService {
  url1:string='http://localhost:3000/basic_tbl/';
  url2:string='http://localhost:3000/permanent_add_tbl/';
  url3:string='http://localhost:3000/present_add_tbl/';
  url4:string='http://localhost:3000/qualification_tbl/';
  url5:string='http://localhost:3000/previous_emp/';
  url6:string='http://localhost:3000/skill_tbl/';

 constructor(private _http:HttpClient) { }
 getAllEmployee() {
  return this._http.get(this.url1);
}
getemployeeById(id){
  return this._http.get(this.url1+id);
}
addbasic_tbl(item : Employee1) {
  let head = new HttpHeaders().set('Content-type','application/json');
let body = JSON.stringify(item);
return this._http.post(this.url1, body, { headers: head });
}

deletebasic_tbl(id) {
  let head = new HttpHeaders().set('Content-Type', 'application/json');
  return this._http.delete(this.url1 + id, { headers: head });
}
//    updateTask(id, todo: Todo) {
//     const headers = { 'content-type': 'application/json' };
//     const body = JSON.stringify(todo);
//      console.log(body);
//      return this._http.put(this.url + '/' + id, todo, {
//       headers: headers
//      });
//  }

editbasic_tbl(items:Employee1){
let head = new HttpHeaders().set('Content-type','application/json');
let body =JSON.stringify(items);
return this._http.put(this.url1+items.id,body, {headers:head} );

}


 getAllTasks1() {

  return this._http.get<Employee2[]>(this.url2);
  }
  getPermanentById(Id1){
      return this._http.get(this.url2+Id1);
    }
    addpermanent_add_tbl(item: Employee2) {
      let head = new HttpHeaders().set('Content-type','application/json');
    let body = JSON.stringify(item);
    return this._http.post<Employee2>(this.url2, body, { headers: head });
  }
   deletepermanent_add_tbl(id1) {
     let head = new HttpHeaders().set('Content-Type', 'application/json');
     return this._http.delete(this.url2 + id1,{ headers:head });
   }
   editpermanent_add_tbl(items:Employee2){
    let head = new HttpHeaders().set('Content-type','application/json');
   let body =JSON.stringify(items);
     return this._http.put(this.url2+items.id1,body, {headers:head} );
 }

//  getAllTasks2() {
//   return this._http.get(this.url3);
//  }
//  getPresentById(Id2){
//    return this._http.get(this.url3+ Id2);
//  }
//  addpresent_add_tbl(item: Employee3){
//  let head = new HttpHeaders().set('Content-type','application/json');
//  let body = JSON.stringify(item);
//  return this._http.post<Employee1>(this.url3, body, {headers: head});
//  }

//  deletepresent_add_tbl(id2) {
//    let head = new HttpHeaders().set('Content-Type', 'application/json');
//    return this._http.delete(this.url3 + id2,{ headers:head });
//  }
//  editpresent_add_tbl(items:Employee3){
//    let head = new HttpHeaders().set('Content-type','application/json');
//    let body =JSON.stringify(items);
//    return this._http.put(this.url3 +items.id2, body, {headers:head} );

//  }

 getAllTasks4() {
   return this._http.get(this.url4);
 }
 getQualificationById(id4){
   return this._http.get(this.url4+ id4);
 }
 addqualification_tbl(item: Employee5){
 let head = new HttpHeaders().set('Content-type','application/json');
 let body = JSON.stringify(item);
 return this._http.post<Employee5>(this.url4, body, {headers: head});
 }

 deletequalification_tbl(id4) {
   let head = new HttpHeaders().set('Content-Type', 'application/json');
   return this._http.delete(this.url4 + id4,{ headers:head });
 }
 editqualification_tbl(items:Employee4){
   let head = new HttpHeaders().set('Content-type','application/json');
   let body =JSON.stringify(items);
   return this._http.put(this.url4 +items.id4, body, {headers:head} );
 }


 getAllTasks3() {
  return this._http.get(this.url5);
}
getPreviousEmpById(Id3){
  return this._http.get(this.url5+ Id3);
}
addprevious_emp(Item: Employee4){
let head = new HttpHeaders().set('Content-type','application/json');
let body = JSON.stringify(Item);
return this._http.post<Employee4>(this.url5, body, {headers: head});
}

deleteprevious_emp(id3) {
  let head = new HttpHeaders().set('Content-Type', 'application/json');
  return this._http.delete(this.url5 + id3,{ headers:head });
}
 editprevious_emp(items:Employee5){
  let head = new HttpHeaders().set('Content-type','application/json');
  let body =JSON.stringify(items);
  return this._http.put(this.url5 +items.id3, body, {headers:head} );
}


 getAllTasks5() {
   return this._http.get(this.url6);
 }
 getSkillById(id5){
   return this._http.get(this.url6+ id5);
 }
  addskill_tbl(item: Employee6){
 let head = new HttpHeaders().set('Content-type','application/json');
 let body = JSON.stringify(item);
 return this._http.post<Employee6>(this.url6, body, {headers: head});
 }

 deleteskill_tbl(id5) {
   let head = new HttpHeaders().set('Content-Type', 'application/json');
   return this._http.delete(this.url6 + id5,{ headers:head });
 }
 editskill_tbl(items:Employee6){
   let head = new HttpHeaders().set('Content-type','application/json');
   let body =JSON.stringify(items);
   return this._http.put(this.url6 +items.id5, body, {headers:head} );


}


}



