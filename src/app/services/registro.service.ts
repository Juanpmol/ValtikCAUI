import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private registrado;
  private username;
  public nombre:Observable<string>;




  constructor(private http: HttpClient) {
    this.registrado = new BehaviorSubject<boolean>(false);
    this.username = new BehaviorSubject<string>('');
    this.nombre = this.username.asObservable();
   }

   registroUsuario(user:Registro): Observable<Registro>{

    let response: any = this.http.post<Registro>(`https://localhost:7194/api/Cliente`,user);
    return response;
  }
  public setNombre(data:string):void{

    this.username.next(data);
  }

  public getNombre():string{
   return this.username.getValue();
  }

  get estaRegistrado():Observable<boolean>{
    return this.registrado.asObservable();
  }

}



