import { Observable } from "rxjs";
import { GetConsultarTodoProductosUseCase } from "../../../dominio/productos/usecase/get-consultar-todo-producto.usecase";
import { IProductoInteractor } from "./iproduct.interactor";
import { ProductoModel } from "../../../dominio/productos/models/producto.model";

export class ProductoInteractor implements IProductoInteractor {

    constructor(
        private readonly getConsultarTodoProductosUseCase: GetConsultarTodoProductosUseCase
    ){}

    public conultar(): Observable<ProductoModel[]>{
        return this.getConsultarTodoProductosUseCase.execute();
    }

    // public consultarId(id: number): Observable<ProductoModel>{
    //     return  
    // }

}