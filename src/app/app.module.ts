import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routing";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LadoUnoComponent } from './lado-uno/lado-uno.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LadoDosComponent } from './lado-dos/lado-dos.component';
import { LadoTresComponent } from './lado-tres/lado-tres.component';
import { LadoCuatroComponent } from './lado-cuatro/lado-cuatro.component';
import { LadoCincoComponent } from './lado-cinco/lado-cinco.component';
import { LadoSeisComponent } from './lado-seis/lado-seis.component';
import {ServiceWorkerModule} from "@angular/service-worker";
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PageNotFoundComponent,
    LadoUnoComponent,
    LadoDosComponent,
    LadoTresComponent,
    LadoCuatroComponent,
    LadoCincoComponent,
    LadoSeisComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(rootRouterConfig, { useHash: false, relativeLinkResolution: 'legacy' }),
    BrowserModule,
    RouterTestingModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule {

}
