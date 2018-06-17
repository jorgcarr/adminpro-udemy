import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess',
  templateUrl: './progess.component.html',
  styles: []
})
export class ProgessComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 50;

  constructor() { }

  ngOnInit() {
  }

  actualizar(event: number) {
    console.log('Evento: ', event);
  }

}
