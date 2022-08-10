import { TokenModel } from '../models/token.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InicioSesion } from '../models/iniciosesion.model';


@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
  }

  loginUsuario(user:number): Observable<InicioSesion>{

    let response: any = this.http.get<InicioSesion>(
      `https://localhost:7194/api/Cliente/${user}`);

    return response;
  }

  get getUserName(){
    return this.username.asObservable();
  }

  public setUserName(data:string):void{
    this.username.next(data);
  }

  get estaLogeado():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  cerrarsesion():void{
    this.setUserName('');
    this.loggedIn.next(false);
  }

}
