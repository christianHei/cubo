import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routing";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LadoUnoComponent } from './lado-uno/lado-uno.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PageNotFoundComponent,
    LadoUnoComponent
  ],
  imports: [
    RouterModule.forRoot(rootRouterConfig, { useHash: false, relativeLinkResolution: 'legacy' }),
    BrowserModule,
    RouterTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule {

}
