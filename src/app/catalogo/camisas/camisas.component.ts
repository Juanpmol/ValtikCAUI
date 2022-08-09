import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CarritoComprasService } from 'src/app/services/carrito-compras.service';


@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.component.html',
  styleUrls: ['./camisas.component.css']
})
export class CamisasComponent implements OnInit {

  products: Product [] = [
  {
       id: "1",
      name: "Camisa manga corta",
      price: 25,
      image: "assets/images/pexels-andge-tanaquin-12482768.jpg"
  },
  {
    id: "2",
    name: "Camiseta cuadros",
    price: 25,
    image: "assets/images/pexels-jeffrey-reed-769732.jpg"
  },
  {
    id: "3",
    name: "Camiseta rayas",
    price: 25,
    image: "assets/images/pexels-gabriela-pereira-2635315.jpg"
  },
  ];

  constructor(private carritoService:CarritoComprasService) { }

  ngOnInit(): void {
  }

   onAddToShoppingCart(producto: Product) {
    this.carritoService.onAddToShoppingCart(producto);
 }
}
