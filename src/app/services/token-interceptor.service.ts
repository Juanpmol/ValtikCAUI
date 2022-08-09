import { NgIfContext } from '@angular/common';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenModel } from '../models/token.model';
import { TokenResponseModel } from '../models/tokenresponse.model';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{


  constructor(private http: HttpClient) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');

    let token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFuZHJlcyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluaXN0cmFkb3IiLCJuYmYiOjE2NjAwMDYxMTMsImV4cCI6MTY2MDAwNjQxMywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE5NCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxOTQifQ.Dzdv93EwZyx6vhyhRurXy41oa7R_TwiKAxsdUe60Jbc';
    let jwttoken = req.clone({
      setHeaders:{
        Authorization: 'bearer ' + token
      }
    })
    return next.handle(jwttoken);
  }


}
