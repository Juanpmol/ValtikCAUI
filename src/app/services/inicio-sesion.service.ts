import { InicioSesion } from '../models/iniciosesion.model';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  constructor(private HttpClient: HttpClient) { }

  validarInicioSesion(user:number,password:string): Observable<any>{
    let response = this.HttpClient
    .get(`https://localhost:7194/api/Cliente/${user}?api_key=`);
    console.log(response);


    return response;
  }
}
