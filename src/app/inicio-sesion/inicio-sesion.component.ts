import { InicioSesionService } from '../services/inicio-sesion.service';
import { Component, OnInit, } from '@angular/core';
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
  esUsuario:boolean = false;
  private usuarioRegistrado!:string;


  constructor(private inicio:InicioSesionService,
    private ruta:Router) {}


  ngOnInit(): void {}

  inicioSesion(user:string, pass:string): any{
    let respuesta = this.inicio.loginUsuario(parseInt(user)).subscribe(data=>{
      if (data.password1 == pass)
      {
        this.esUsuario=true;
        this.usuarioRegistrado=(data.nombre1 +" "+ data.apellido1);
        this.inicio.setUserName(this.usuarioRegistrado);
        alert(`Bienvenido: ${this.usuarioRegistrado}`);
        this.ruta.navigate(['']);
      }
      else if (data.password1 != pass){
        alert('Password Incorrecto');
      }
    });
    return respuesta;
  }

  getUsuarioRegistrado():string{
    return this.usuarioRegistrado;
  }

}
