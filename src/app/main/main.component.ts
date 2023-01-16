import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() texto: string

  constructor() {
    console.log('*** Estoy en el constructor *** ');
    console.log('*** Lo uso para inicializar propiedades *** ');
    console.log(`Texto: ${this.texto}`);
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log('*** Estoy en el ngOnChanges *** ');
      console.log(`Texto: ${this.texto}`);
      console.log(changes['texto']);
      console.log(`valor anterior : ${changes['texto'].previousValue}. Valor actual: ${changes['texto'].currentValue}`);
  }

  ngOnInit(): void {
    console.log('*** Estoy en ngOnInit *** ');
    console.log('*** Lo uiso para lanzar las acciones que arrancan el componente *** ');
    console.log(`Texto: ${this.texto}`);
  }

  ngAfterViewInit(): void {
    console.log('*** Estoy en ngAfterViewInit *** ');
    console.log('*** Lo uso para lanzar acciones iniciales dentro de la plantilla *** ');
  }

}


