import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree  } from "@angular/router";
import { Observable } from 'rxjs';
import { EdittodoComponent } from "./edittodo/edittodo.component";

@Injectable({
  providedIn: 'root'
})
export class TodoeditguardService implements CanDeactivate<EdittodoComponent>{

  constructor() { }
  canDeactivate(component: EdittodoComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
     nextState?:RouterStateSnapshot
     ):
     boolean{
       return confirm('are you sure,you want to navigate away?');

     }


  }

