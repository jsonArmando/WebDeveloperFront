import { Component, OnInit } from '@angular/core';
import { Notas } from './notas';
import { NotasService } from './notas.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {


  notas: Notas = new Notas();
  title: string = "Registro de Actividades con Fecha de Vencimiento";
  constructor(private notasService: NotasService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarNota();
  }

  cargarNota(): void {
    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.notasService.getNota(id).subscribe((notas) => this.notas = notas)
      }
    })
  }

  create(): void {
    //console.log("Clicked!");
    //console.log(this.clientes);
    this.notasService.create(this.notas)

      .subscribe(clientes => {
        this.router.navigate(['/notas'])
        swal.fire('Nuevo notas', `Notas creado con éxito`, 'success')
      }
      );
  }

  update(): void {
    this.notasService.update(this.notas)
      .subscribe(notas => {
        this.router.navigate(['/notas'])
        swal.fire('Notas Actualizado', `Notas Actualizado con éxito`, 'success')
      }

      )
  }

}
