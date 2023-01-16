import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent {

  @Input() number1: number;
  @Input() number2: number;
  resultado: number;

  constructor() {
    this.resultado=0;
  }

  onClick() {
    this.resultado = this.number1 + this.number2;
  }

}
