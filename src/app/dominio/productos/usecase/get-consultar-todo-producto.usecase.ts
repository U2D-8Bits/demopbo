import { Injectable } from "@angular/core";
import { UseCase } from "../../../core/base/usecase.contract";
import { Observable } from "rxjs";
import { ProductoModel } from "../models/producto.model";
import { IProductoRepository } from "../repositories/iproducto.repository";

Injectable({ providedIn: 'root' })
export class GetConsultarTodoProductosUseCase implements UseCase<undefined, Observable<ProductoModel[]>>{

    constructor(
        private readonly productoRepository: IProductoRepository
    ){}

    execute(): Observable<ProductoModel[]> {
        return this.productoRepository.consultar();
    }
}