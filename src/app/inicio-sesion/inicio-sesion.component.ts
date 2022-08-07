import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  usuario!: string;
  contrasena!: string;
  private cadena!: string;
  constructor() { }

  ngOnInit(): void {
  }

  validarInicioSesion(user:string, pass:string): string{
    this.cadena=user+pass;
    console.log(this.cadena);
    return this.cadena;
  }

}
