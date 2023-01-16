import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit{

  personas: any[];

  constructor() {
    this.personas = [
      {nombre: 'Mario', apellidos: 'Giron', edad: 36, calle: 'tokio', telefono: 2222},
      {nombre: 'Rosa', apellidos: 'Garcia', edad: 13, calle: 'tokio', telefono: 2222},
      {nombre: 'Rocio', apellidos: 'Martin', edad: 16, calle: 'tokio', telefono: 2222},
      {nombre: 'Manuel', apellidos: 'Gonzalez', edad: 87, calle: 'tokio', telefono: 2222},
      {nombre: 'Carlos', apellidos: 'Rodriguez', edad: 47, calle: 'tokio', telefono: 2222}
    ];
  }
  ngOnInit(): void {

  }

  onClick() {
    this.personas.push({
      nombre: 'Mario', apellidos: 'Inostroza', calle: 'el saladillo', telefono: 111111111
    })
  }

}
