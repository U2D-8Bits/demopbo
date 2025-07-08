import { inject, Injectable } from "@angular/core";
import { IProductoAdapter } from "./iproducto.adapter";
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENTS } from "../../../../environments/environments";
import { Observable } from "rxjs";
import { ProductoModel } from "../../../dominio/productos/models/producto.model";

@Injectable({providedIn: "root"})
export class ProductoAdapter implements IProductoAdapter {

    private readonly http = inject(HttpClient);
    private readonly baseUrl: string = `${ENVIRONMENTS.baseUrl}/products`;

    ConsultarProductos(): Observable<ProductoModel[]>{
        return this.http.get<ProductoModel[]>(this.baseUrl, {
            headers: {
                "content-type": "application/json"
            },
            responseType: "json",
            observe: "body"
        });
    }

}