import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler,  HttpInterceptor, HttpRequest,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorestokenService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const head = new HttpHeaders().set('content-Type','application/json');
    const httpreq=req.clone({
      headers:head,
    });
    console.log(httpreq);
    return next.handle(httpreq);
  }
}
