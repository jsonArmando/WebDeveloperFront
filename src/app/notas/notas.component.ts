import { Component, OnInit } from '@angular/core';
import { Notas } from './notas';
import { NOTAS } from './notas.json';
import { NotasService } from './notas.service'

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html'
})
export class NotasComponent implements OnInit {
  notas: Notas[];
  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.notasService.getNotas().subscribe(
      notas => this.notas=notas
    );
    /*(notas: Notas[]) => {
      this.notas = NOTAS;
    }*/
  }
}