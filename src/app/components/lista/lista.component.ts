import { Component, Input } from '@angular/core';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  @Input() tareas: Tarea[];

  constructor() {

  }

  ngOnInit(): void {

  }

  mostrarTareas() {
    let resultado = '<ul>';
    for (let tarea of this.tareas) {
      resultado += `<li>${tarea.titulo} - ${tarea.descripcion}</li>`;

    }
    resultado+='</ul>';
    return resultado;
  }

  onClick(pTarea: Tarea) {
    pTarea.completa = !pTarea.completa;
  }

  onClickBorrar(indice) {
    this.tareas.splice(indice, 1);
  }

}
