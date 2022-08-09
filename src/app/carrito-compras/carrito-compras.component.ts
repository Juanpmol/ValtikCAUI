import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../services/carrito-compras.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  myShoppingCart: Product[] = [];

  constructor(private carritoService: CarritoComprasService) { }

  ngOnInit(): void {
    this.myShoppingCart = this.carritoService.myShoppingCart;
  }

  onAddToShoppingCart (producto: Product){
    console.log(producto)
  }

}
