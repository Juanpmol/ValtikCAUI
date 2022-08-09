import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CarritoComprasService } from 'src/app/services/carrito-compras.service';


@Component({
  selector: 'app-pantalones',
  templateUrl: './pantalones.component.html',
  styleUrls: ['./pantalones.component.css']
})
export class PantalonesComponent implements OnInit {

  myShoppingCart: Product[] = [];
  producto: Product [] = [
    {
      id: "4",
      name: "Pantalones vaqueros",
      price: 65,
      image: "assets/images/pexels-castorly-stock-4109755.jpg"
    },
    {
      id: "5",
      name: "Pantalones clásicos",
      price: 55,
      image: "assets/images/pexels-henry-&-co-1210484.jpg"
    },
    {
      id: "6",
      name: "Pantalones slim fit",
      price: 75,
      image: "assets/images/pexels-castorly-stock-4109755.jpg"
    },


  ];

  constructor(private carritoService:CarritoComprasService) { }

  ngOnInit(): void {
  }

   onAddToShoppingCart(producto: Product) {
    this.carritoService.onAddToShoppingCart(producto);
 }

}
