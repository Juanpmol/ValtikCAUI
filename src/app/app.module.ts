import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CatalogoComponent } from './catalogo/catalogo/catalogo.component';
import { BuscarComponent } from './components/buscar/buscar/buscar.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatalogoComponent,
    BuscarComponent,
    RegistroComponent,
    CarruselComponent,
    FooterComponent,
    HomeComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
