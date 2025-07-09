import { Injectable } from "@angular/core";
import { ProductoModel } from "../models/producto.model";
import { Observable } from "rxjs";

Injectable({
    providedIn: 'root'
})
export abstract class IProductoRepository {
    
    abstract consultar(): Observable<ProductoModel[]>;
    // abstract consultarId(id: string): Observable<ProductoModel>;
    // abstract crear(producto: ProductoModel): Observable<ProductoModel>;
    // abstract actualizar(producto: ProductoModel): Observable<ProductoModel>;
    // abstract eliminar(id: string): Observable<void>;
}