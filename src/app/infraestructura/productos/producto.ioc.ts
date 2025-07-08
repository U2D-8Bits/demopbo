import { IProductoAdapter } from "./adapters/iproducto.adapter"
import { ProductoAdapter } from "./adapters/producto.adapter"

export const PRODUCTO_IOC = [

    {
        provide: 'IProductoAdapter',
        useClass: ProductoAdapter,
    },


]