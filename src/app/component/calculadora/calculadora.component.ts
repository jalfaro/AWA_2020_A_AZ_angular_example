import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  private num1;
  private num2;
  private showMessage;
  constructor() { }

  ngOnInit() {
    this.num1 = 9;
    this.num2 = 10;
  }

  muestraResultado(){
      this.showMessage = !this.showMessage;
  }

}
