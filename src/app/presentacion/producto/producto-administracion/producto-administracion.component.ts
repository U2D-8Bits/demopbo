import { Component, OnInit } from '@angular/core';
import { ProductoInteractor } from '../../../infraestructura/producto/interactors/producto.interactor';
import { ProductoModel } from '../../../dominio/producto/models/producto.model';

@Component({
  selector: 'app-producto-administracion',
  templateUrl: './producto-administracion.component.html',
  styleUrls: ['./producto-administracion.component.css']
})
export class ProductoAdministracionComponent implements OnInit {

  constructor(
    private productoInteractor: ProductoInteractor,
  ) { }

  ngOnInit() {
    this.cargarProductos();
  }


  cargarProductos(){
    this.productoInteractor.consultar()
    .subscribe({
      next: (productos: ProductoModel[]) => {
        console.log('Productos cargados:', productos);
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
      }
    })
  }

}
