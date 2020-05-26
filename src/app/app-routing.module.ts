import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotasComponent} from './notas/notas.component';
import { FormComponent} from './notas/form.component';
const routes: Routes = [
  {path:'notas',component:NotasComponent},
  {path: 'notas/form',component:FormComponent},
  {path: 'notas/form/:id',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
