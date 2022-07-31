import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav/nav.component';
import { CatalogoComponent } from './components/catalogo/catalogo/catalogo.component';
import { BuscarComponent } from './components/buscar/buscar/buscar.component';
import { RegistroComponent } from './components/registro/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatalogoComponent,
    BuscarComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
