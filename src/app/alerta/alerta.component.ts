import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent {

  @Input('texto') mensaje: string;
  @Input() subTitulo: string;
  @Output() alertaPulsada: EventEmitter<string>;

  constructor() {
    this.mensaje = 'Mensaje de Alerta por Defecto';
    this.subTitulo = 'Mensaje de alerta sub titulo';
    this.alertaPulsada = new EventEmitter();
  }
  ngOnInit(): void {
    console.log(this.mensaje);

  }

  onClick() {
    this.alertaPulsada.emit('JOLINES');
  }

}
