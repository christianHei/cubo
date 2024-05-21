import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {OpcionesComponent} from "./opciones/opciones.component";

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'opciones/:id',
    component: OpcionesComponent
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  },
  {
    path: 'sessions/404',
    component: PageNotFoundComponent
  }
];
