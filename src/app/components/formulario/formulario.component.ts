import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  @Output() tareaCreada: EventEmitter<Tarea>;
  nuevaTarea: Tarea;

  constructor() {
    this.nuevaTarea = new Tarea();
    this.tareaCreada = new EventEmitter();
  }

  ngOnInit(): void {

  }

  onClick() {
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea();
  }

}
