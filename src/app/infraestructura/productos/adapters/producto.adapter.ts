import { inject, Injectable } from "@angular/core";
import { IProductoAdapter } from "./iproducto.adapter";
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENTS } from "../../../../environments/environments";
import { map, Observable } from "rxjs";
import { ProductoEntity } from "../entities/producto.entity";

@Injectable({
    providedIn: "root"
})
export class ProductoAdapter implements IProductoAdapter {

    private readonly httpClient = inject(HttpClient);
    private readonly baseUrl: string = `${ENVIRONMENTS.baseUrl}/productS`;
    

    constructor(){}

    consultar(): Observable<ProductoEntity[]> {
        return this.httpClient.get<ProductoEntity[]>(this.baseUrl)
        .pipe(
            map((productos: ProductoEntity[]) => productos)
        )
    }

    consultarId(id: number): Observable<ProductoEntity> {
        return this.httpClient.get<ProductoEntity>(`${this.baseUrl}/${id}`)
        .pipe(
            map((producto: ProductoEntity) => producto)
        )
    }

    crear(producto: ProductoEntity): Observable<ProductoEntity> {
        return this.httpClient.post<ProductoEntity>(this.baseUrl, producto)
        .pipe(
            map((productoCreado: ProductoEntity) => productoCreado)
        )
    }

    actualizar(id: number, producto: ProductoEntity): Observable<ProductoEntity>{
        return this.httpClient.put<ProductoEntity>(`${this.baseUrl}/${id}`, producto)
        .pipe(
            map((productoActualizado: ProductoEntity) => productoActualizado)
        )
    }

    eliminar(id: number): Observable<boolean> {
        return this.httpClient.delete<boolean>(`${this.baseUrl}/${id}`)
        .pipe(
            map((respuesta: boolean) => respuesta)
        )
    }
}