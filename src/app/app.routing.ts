import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LadoUnoComponent} from "./lado-uno/lado-uno.component";

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
    path: 'lado-uno',
    component: LadoUnoComponent
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
