import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CarritoComprasService } from 'src/app/services/carrito-compras.service';


@Component({
  selector: 'app-zapatos',
  templateUrl: './zapatos.component.html',
  styleUrls: ['./zapatos.component.css']
})
export class ZapatosComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product [] = [
    {
      id: "7",
      name: "Tenis Nike",
      price: 90,
      image: "assets/images/tenis-1.jpg"
    },
    {
      id: "8",
      name: "Tenis Vans",
      price: 80,
      image: "assets/images/tenis-2.jpg"
    },
    {
      id: "9",
      name: "Cuero Cocodrilo",
      price: 250,
      image: "assets/images/pexels-pixabay-267320.jpg"
    },


  ];

  constructor(private carritoService:CarritoComprasService) { }

  ngOnInit(): void {
  }

   onAddToShoppingCart(producto: Product) {
    this.carritoService.onAddToShoppingCart(producto);
 }


}
