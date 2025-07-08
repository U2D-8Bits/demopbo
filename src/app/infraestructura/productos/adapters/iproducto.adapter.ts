import { Observable } from "rxjs";
import { ProductoModel } from "../../../dominio/productos/models/producto.model";

export interface IProductoAdapter {
    ConsultarProductos(): Observable<ProductoModel[]>;
}