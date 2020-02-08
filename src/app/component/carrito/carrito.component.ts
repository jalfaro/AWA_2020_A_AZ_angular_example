import { Component, OnInit } from '@angular/core';
import { Compra } from '../../models/Compra';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos: Compra[];
  constructor() { }

  ngOnInit() {
    this.productos = [];
  }

  guardar(nombre, precio, cantidad) {
    let elemento:Compra = {producto: nombre, precio: parseFloat(precio), cantidad: parseInt(cantidad)};
    this.productos.push(elemento);
    console.log(this.productos);
  }
}
