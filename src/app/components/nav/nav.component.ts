import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  ingresoUsuario: boolean = false;
  esAdmin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  nombreUsuario(): string {
    let nombreUsuario:string= "Usuario Prueba";
    this.ingresoUsuario=!this.ingresoUsuario;
    return nombreUsuario;
  }
}
