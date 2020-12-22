import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { User } from './user';
import { UserdataService } from "./userdata.service";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UserresolverService implements Resolve<User[]> {

  constructor(private _userData:UserdataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this._userData.getAllUsers().pipe(
      map((x: User[]) =>{
        console.log('from resolver',x);
        return x;
      })
    );

  }
}
