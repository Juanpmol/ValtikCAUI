import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../services/carrito-compras.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  myShoppingCart: Product[] = [];

  constructor(private carritoService: CarritoComprasService,
    private ruta:Router) { }

  ngOnInit(): void {
    this.myShoppingCart = this.carritoService.myShoppingCart;
  }

  onAddToShoppingCart (producto: Product){
    console.log(producto);
    this.carritoService.incrementaCantidadProductos();
  }

  volverCatalogo():void{
    this.ruta.navigate(['catalogo']);
  }

}
