import { TokenModel } from '../models/token.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InicioSesion } from '../models/iniciosesion.model';


@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
  private loggedIn;
  private username;
  public nombre:Observable<string> ;

  constructor(private http: HttpClient) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
    this.username = new BehaviorSubject<string>('');
    this.nombre = this.username.asObservable();
  }

  loginUsuario(user:number): Observable<InicioSesion>{

    let response: any = this.http.get<InicioSesion>(
      `https://localhost:7194/api/Cliente/${user}`);
    localStorage.setItem("user", (response.nombre1 + " "+ response.apellido1));
    this.setNombre((response.nombre1 + " "+ response.apellido1));
    this.loggedIn.next(true);
    return response;
  }

  public setNombre(data:string):void{

    this.username.next(data);
  }

  public getNombre():string{
   return this.username.getValue();
  }

  get estaLogeado():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  cerrarsesion():void{
    this.setNombre('');
    this.loggedIn.next(false);
  }

}
