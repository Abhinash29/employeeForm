import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserguardService implements CanActivate,CanLoad {

  constructor() { }
  canLoad(route: Route, segments: UrlSegment[]): boolean  {
    if (localStorage.getItem('user_name') !=null){
      return true;
    } else{
    alert('login first to access this page');
    return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    if (localStorage.getItem('user_name') !=null){
      return true;
    } else{
    alert('login first to access this page');
    return false;
    }

  }

}
