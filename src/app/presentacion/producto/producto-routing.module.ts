import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoAdministracionComponent } from './producto-administracion/producto-administracion.component';

const routes: Routes = [
  {
    path: '',
    title: 'Productos',
    redirectTo: 'listado',
    pathMatch: 'full'
  },
  {
    path: 'listado',
    component: ProductoAdministracionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
