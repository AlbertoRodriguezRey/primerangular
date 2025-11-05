import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Deportesv2Component } from '../components/deportesv2/deportesv2.component';
import { DeportesComponent } from '../components/deportes/deportes.component';
import { formsbindingComponent } from '../components/formsbinding/formsbinding.component';
import { TablamultiplicarComponent } from '../components/tablamultiplicar/tablamultiplicar.component';
import { SumarNumeros } from '../components/sumarnumeros/sumarnumeros.component';


@NgModule({
  declarations: [
    App,
    DeportesComponent,
    Deportesv2Component,
    formsbindingComponent,
    SumarNumeros,
    TablamultiplicarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
