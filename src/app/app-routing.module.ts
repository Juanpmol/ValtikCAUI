import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { CamisasComponent } from './catalogo/camisas/camisas.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PantalonesComponent } from './catalogo/pantalones/pantalones.component';
import { ZapatosComponent } from './catalogo/zapatos/zapatos.component';
import { HomeComponent } from './home/home/home.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent
},
{
  path: 'inicio-sesion',
  component: InicioSesionComponent
},
{
  path: 'catalogo',
  component: CatalogoComponent
},
{
  path: 'registro',
  component: RegistroComponent
},
{
  path: 'carrito-compras',
  component: CarritoComprasComponent
},
{
  path: 'catalogo/camisas',
  component: CamisasComponent
},
{
  path: 'catalogo/pantalones',
  component: PantalonesComponent
},
{
  path: 'catalogo/zapatos',
  component: ZapatosComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
