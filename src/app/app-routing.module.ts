import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareaEdicionComponent } from './pages/tarea/tarea-edicion/tarea-edicion.component';
import { TareaComponent } from './pages/tarea/tarea.component';

const routes: Routes = [
  {path: 'tarea', component: TareaComponent, children:[
    {path: 'nuevo', component: TareaEdicionComponent},
    {path: 'edicion/:id', component: TareaEdicionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
