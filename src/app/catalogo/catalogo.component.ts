import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  @Input() product: Product = {
    id: "",
    name: "",
    image: "",
    price: 0,
  }

  constructor() { }

  ngOnInit(): void {
  }




}
