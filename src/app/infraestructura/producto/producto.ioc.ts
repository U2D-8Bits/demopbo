import { ProductoService } from "../../aplicacion/producto/services/producto.service"
import { IProductoRepository } from "../../dominio/producto/repositories/iproducto.repository"
import { GetConsultarTodoProductosUseCase } from "../../dominio/producto/usecase/get-consultar-todo-producto.usecase"
import { IProductoAdapter } from "./adapters/iproducto.adapter"
import { ProductoAdapter } from "./adapters/producto.adapter"
import { IProductoInteractor } from "./interactors/iproduct.interactor"
import { ProductoInteractor } from "./interactors/producto.interactor"

export const PRODUCTO_IOC = [

    {
        provide: IProductoAdapter,
        useClass: ProductoAdapter,
    },
    {
        provide: IProductoRepository,
        useClass: ProductoService
    },
    {
        provide: IProductoInteractor,
        useClass: ProductoInteractor
    },
    {
        deps: [IProductoRepository],
        provide: GetConsultarTodoProductosUseCase,
        useFactory: (productoRepository: IProductoRepository) => {
            return new GetConsultarTodoProductosUseCase(productoRepository);
        }
    }
]