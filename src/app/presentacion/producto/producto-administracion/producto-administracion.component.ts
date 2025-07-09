import { Component, OnInit } from '@angular/core';

import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ProductoModel } from '../../../dominio/producto/models/producto.model';
import { ProductoAdapter } from '../../../infraestructura/producto/adapters/producto.adapter';
import { ProductoInteractor } from '../../../infraestructura/producto/interactors/producto.interactor';

@Component({
  selector: 'app-producto-administracion',
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './producto-administracion.component.html',
  styleUrl: './producto-administracion.component.scss'
})
export class ProductoAdministracionComponent implements OnInit{

  productos: ProductoModel[] = [];

  constructor(
    private productoInteractor: ProductoInteractor,
  ){}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {

    this.productoInteractor.consultar()
    .subscribe({
      next: (productos: ProductoModel[]) => {
        this.productos = productos
        console.log(this.productos)
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
      }
    })
  }

}
