import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { InicioSesionService } from 'src/app/services/inicio-sesion.service';
import {CarritoComprasService} from 'src/app/services/carrito-compras.service';
// import { InicioSesionComponent } from 'src/app/inicio-sesion/inicio-sesion.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  ingresoUsuario: boolean = false;
  esAdmin: boolean = false;
  nombreUser!: string;
  counter:number=0;

  constructor(public inicio:InicioSesionService,
    public carritoCompra: CarritoComprasService) {
    this.ingresoUsuario = Boolean(inicio.estaLogeado);
    this.nombreUser = inicio.getNombre();
   }

  // constructor() { }

  ngOnInit(): void {
    this.carritoCompra.myCart$.subscribe(producto => {
      this.counter = producto.length;
    })
  }

  nombreUsuario(): string {
    this.nombreUser = this.inicio.getNombre();
    console.log(this.nombreUser);
    console.log(this.ingresoUsuario);
    return this.nombreUser;
  }
}
