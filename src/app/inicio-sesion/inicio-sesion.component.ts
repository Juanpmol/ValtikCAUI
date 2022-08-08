import { InicioSesionService } from '../services/inicio-sesion.service';
import { Component, OnInit } from '@angular/core';
import { TokenModel } from '../models/token.model';
import { InicioSesion } from '../models/iniciosesion.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  usuario!: string;
  contrasena!: string;
  private cadena!: string;

  //Tocó así :(
    token: TokenModel = {
      UserName:'admin',
      PasswordAuth: '12345'
    }

  tokenResponse!:string;

  constructor(private inicio:InicioSesionService) {
    inicio.iniciarAPI(this.token).subscribe(data=>{
      this.tokenResponse=data.token;
      // console.log(this.tokenResponse);
    });
}


  ngOnInit(): void {}

  inicioSesion(user:string, pass:string): any{
    let sesion:any = this.inicio.loginUsuario(parseInt(user)).subscribe((data: any) =>{
      console.log(data);
    });

    // if(sesion.idCliente==user && sesion.password == pass)
    // {
    //   localStorage.setItem("usuario",(sesion.nombre1+" "+sesion.apellido1));
    //   this.ruta.navigate(['']);
    // }
    this.cadena = user+pass;

    console.log(this.cadena);
    return this.cadena;
  }

}
