import { Observable } from "rxjs";
import { ProductoEntity } from "../entities/producto.entity";


// Este archivo define una interfaz para el adaptador de productos. La interfaz del adaptador hace referencia a la entidad ProductoEntity, que es una representación de los datos del producto en la infraestructura.

export abstract class IProductoAdapter {

    // Métodos abstractos que deben ser implementados por cualquier clase que implemente esta interfaz.

    abstract consultar(): Observable<ProductoEntity[]>;

    abstract consultarId(id: number): Observable<ProductoEntity>;

    abstract crear(producto: ProductoEntity): Observable<ProductoEntity>;

    abstract actualizar(id: number, producto: ProductoEntity): Observable<ProductoEntity>;

    abstract eliminar(id: number): Observable<boolean>;
}