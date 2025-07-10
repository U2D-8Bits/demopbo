import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ProductoModel } from '../../../dominio/producto/models/producto.model';
import { ProductoAdapter } from '../../../infraestructura/producto/adapters/producto.adapter';
import { ProductoInteractor } from '../../../infraestructura/producto/interactors/producto.interactor';

@Component({
  selector: 'app-producto-administracion',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './producto-administracion.component.html',
  styleUrl: './producto-administracion.component.scss'
})
export class ProductoAdministracionComponent implements OnInit{

  productos: ProductoModel[] = [];
  usuario: string = '';

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

  continuar() {
    if (this.usuario.trim()) {
      console.log('Usuario:', this.usuario);
      // Aquí puedes agregar la lógica para continuar
    } else {
      console.log('Por favor ingresa un nombre de usuario');
    }
  }

}
