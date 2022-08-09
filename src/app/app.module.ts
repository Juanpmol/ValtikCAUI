import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { RegistroComponent } from './registro/registro.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CamisasComponent } from './catalogo/camisas/camisas.component';
import { PantalonesComponent } from './catalogo/pantalones/pantalones.component';
import { ZapatosComponent } from './catalogo/zapatos/zapatos.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CamisasComponent,
    BuscarComponent,
    RegistroComponent,
    CarruselComponent,
    FooterComponent,
    HomeComponent,
    InicioSesionComponent,
    PantalonesComponent,
    ZapatosComponent,
    CatalogoComponent,
    CarritoComprasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
