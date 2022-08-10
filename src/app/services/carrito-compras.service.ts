import { EventEmitter, Injectable, Output } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  myShoppingCart: Product [] = [];


  private myCart = new BehaviorSubject<Product[]>([]);
  public cantidadProductos = new BehaviorSubject<number>(0);

  myCart$ = this.myCart.asObservable();

  total = 0;


  constructor() { }

  addProduct(producto: Product) {
    this.myShoppingCart.push(producto);
    this.myCart.next(this.myShoppingCart);
  }

  ngOnInit(): void {
  }

   onAddToShoppingCart(producto: Product) {
    this.myShoppingCart.push(producto);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    this.incrementaCantidadProductos();
 }
 get getCantidadProductos(){
  return this.cantidadProductos.asObservable();
 }

 incrementaCantidadProductos(){
  this.cantidadProductos.next(this.cantidadProductos.value+1);
 }

}
