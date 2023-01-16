import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {

  mensaje: string;
  identiParrafo: string;
  identifInput: string;

  constructor() {
    this.mensaje = 'Un saludo a todos';
    this.identiParrafo = 'Parrafo Principal';
    this.identifInput= 'text';
    setTimeout(() => {
      this.mensaje = 'Otro mensaje';
      this.identiParrafo= 'Main';
      this.identifInput= 'password';
    }, 3000);
  }

  mostrarSaludo(): string {
    return 'Saludo desde el método';
  }

}
