import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  resultado: string;
  calculoFinalizado: boolean;

  constructor() {
    this.resultado = "";
    this.calculoFinalizado = false;
  }

  onClick($event) {
    if(this.calculoFinalizado) {
      this.resultado = $event.target.innerText;
      this.calculoFinalizado = false;
    } else{
      this.resultado += $event.target.innerText;
    }
  }

  onClickResult() {
    this.resultado = eval(this.resultado);
    this.calculoFinalizado = true;
  }

}
