import { CarritoComponent } from './component/carrito/carrito.component';
import { SaludoComponent } from './component/saludo/saludo.component';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"calcu", component: CalculadoraComponent},
  {path:"saludo", component: SaludoComponent},
  {path:"carrito", component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
