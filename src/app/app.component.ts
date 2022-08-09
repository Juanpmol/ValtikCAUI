import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ValtikCAUI';
  nombreUsuario: string ="";
  @Output()
  private _getNombreUsuario = new EventEmitter<string>;
  public get getNombreUsuario() {
    return this._getNombreUsuario;
  }
  public set getNombreUsuario(value) {
    this._getNombreUsuario = value;
  }

  products: Product [] = [
    {
      id: "",
      name: "",
      price: 0,
      image: ""
    },

  ]


}
