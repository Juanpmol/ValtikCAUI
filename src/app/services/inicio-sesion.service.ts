import { TokenModel } from '../models/token.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenResponseModel } from '../models/tokenresponse.model';
import { InicioSesion } from '../models/iniciosesion.model';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  //Tocó así :(
    token: TokenModel = {
      UserName:'admin',
      PasswordAuth: '12345'
    }

    header = new HttpHeaders();
  constructor(private http: HttpClient) {}

  iniciarAPI(auth:TokenModel): Observable<TokenResponseModel>{
    let response = this.http.post<TokenResponseModel>(`https://localhost:7194/api/Token`,auth);
    return response;
  }

  loginUsuario(user:number): Observable<InicioSesion>{
    let tokenResponse: any = this.iniciarAPI(this.token);
    this.header.append("Content-Type", "application/json");
    this.header.append("Authorization", "Bearer "+tokenResponse.token)
    let response: any = this.http.get<InicioSesion>(
      `https://localhost:7194/api/Cliente/${user}`,{headers: this.header});
    return response;
  }

}
