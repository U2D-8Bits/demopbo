import { Observable } from "rxjs";
import { GetConsultarTodoProductosUseCase } from "../../../dominio/producto/usecase/get-consultar-todo-producto.usecase";
import { IProductoInteractor } from "./iproduct.interactor";
import { ProductoModel } from "../../../dominio/producto/models/producto.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductoInteractor implements IProductoInteractor {

    constructor(
        private readonly getConsultarTodoProductosUseCase: GetConsultarTodoProductosUseCase
    ){}

    public consultar(): Observable<ProductoModel[]>{
        return this.getConsultarTodoProductosUseCase.execute();
    }

    // public consultarId(id: number): Observable<ProductoModel>{
    //     return  
    // }

}