import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LadoUnoComponent} from "./lado-uno/lado-uno.component";
import {LadoDosComponent} from "./lado-dos/lado-dos.component";
import {LadoTresComponent} from "./lado-tres/lado-tres.component";
import {LadoCuatroComponent} from "./lado-cuatro/lado-cuatro.component";
import {LadoCincoComponent} from "./lado-cinco/lado-cinco.component";
import {LadoSeisComponent} from "./lado-seis/lado-seis.component";

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
    path: 'lado-dos',
    component: LadoDosComponent
  },
  {
    path: 'lado-tres',
    component: LadoTresComponent
  },
  {
    path: 'lado-cuatro',
    component: LadoCuatroComponent
  },
  {
    path: 'lado-cinco',
    component: LadoCincoComponent
  },
  {
    path: 'lado-seis',
    component: LadoSeisComponent
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
