import { Component, Output, EventEmitter, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {

  @Input() inicio: number;
  contador: number;

  @Output() alertaMensaje: EventEmitter<string>;

  constructor() {
    this.inicio = 1;
    this.contador = this.inicio;
    this.alertaMensaje = new EventEmitter();
  }

  ngOnInit(): void {
    this.contador = this.inicio ? this.inicio : 10;
    console.log(this.inicio);

  }

  onClick() {
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador < 0) {
        clearInterval(interval);
        this.contador = this.inicio;
        this.alertaMensaje.emit('finalizo el contador desde  '+this.inicio);
      }
    }, 1000);
  }

}

