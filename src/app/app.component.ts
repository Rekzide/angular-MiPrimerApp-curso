import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  propiedadesParrado: any;
  mostrar: boolean;
  arrTareas: Tarea[];

  constructor() {
    this.propiedadesParrado = {
      color: 'red',
      fontSize: '24px'
    }

    this.mostrar = false;
    this.arrTareas = [];
  }

  cambiaColor(pColor: string) {
    switch (pColor) {
      case 'a' :
        this.propiedadesParrado.color= 'yellow';
        break;
      case 'r' :
        this.propiedadesParrado.color= 'red';
        break;
      case 'v' :
        this.propiedadesParrado.color= 'green';
        break;
    }
  }

  onInput($event) {
    console.log($event.target.value);
    this.propiedadesParrado.fontSize = `${$event.target.value}px`;
  }

  onClickMostrar() {
    this.mostrar = !this.mostrar;
  }


  onTareaCreada($event) {
    console.log($event);
    this.arrTareas.push($event);
  }

}
