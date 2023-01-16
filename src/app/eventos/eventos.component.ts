import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  mensaje: string;

  constructor() {
    this.mensaje= 'este es el mensaje inicial';
  }

onClick($event) {
  console.log('Se ha pulsado el boton');
  console.log($event);
}

onChange($event) {
  console.log($event.target.value);
}

onMouseEnter() {
  //console.log('Entro en el div');
  this.mensaje = 'Estoy Dentro del Div';
}

onMouseOut() {
  this.mensaje = 'Saliendo del div';
}

onChangeInput($event) {
  console.log($event.target.value);
}

onInput($event) {
  this.mensaje = $event.target.value;
}
onFocus() {
  console.log('Recibe foco');
}

onBlur() {
  console.log('Pierde el foco');
}

}
