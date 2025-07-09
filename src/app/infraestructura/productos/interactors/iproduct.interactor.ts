import { Observable } from "rxjs";
import { ProductoModel } from "../../../dominio/productos/models/producto.model";

export abstract class IProductoInteractor {

    abstract consultar(): Observable<ProductoModel[]>;

    // abstract consultarId(): Observable<ProductoModel>;

    // abstract crear(producto: ProductoModel): Observable<ProductoModel>;

    // abstract actualizar(producto: ProductoModel): Observable<ProductoModel>;

    // abstract eliminar(id: string): Observable<boolean>;
}