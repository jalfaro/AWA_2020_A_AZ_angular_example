import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { SaludoComponent } from './component/saludo/saludo.component';
import { MenuComponent } from './component/menu/menu.component';
import { CarritoComponent } from './component/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    SaludoComponent,
    MenuComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
