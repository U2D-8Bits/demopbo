import {inject, Injectable} from '@angular/core';
import { IProductoRepository } from '../../../dominio/productos/repositories/iproducto.repository';
import { IProductoAdapter } from '../../../infraestructura/productos/adapters/iproducto.adapter';
import { map, Observable } from 'rxjs';
import { ProductoModel } from '../../../dominio/productos/models/producto.model';
import { ProductoEntity } from '../../../infraestructura/productos/entities/producto.entity';

Injectable({
    providedIn: 'root'
})
export class ProductoService implements IProductoRepository {

    private readonly productoAdapter: IProductoAdapter = inject(IProductoAdapter);


    consultar(): Observable<ProductoModel[]>{

        return this.productoAdapter.consultar()
        .pipe(
            map((productos: ProductoEntity[]) => {
                return productos.map((producto: ProductoEntity) => {
                    return {
                        codigo: producto.id,
                        titulo: producto.title,
                        precio: producto.price,
                        descripcion: producto.description,
                        categoria: producto.category,
                        imagen: producto.image,
                        putaje: {
                            puntaje: producto.rating?.rate ?? 0,
                            valor: producto.rating?.count ?? 0
                        }
                    }
                })
            })
        )

    }

}