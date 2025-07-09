import { PuntajeModel } from "./puntaje.model";

export class ProductoModel {
    codigo: number;
    titulo: string;
    precio: number;
    descripcion: string;
    categoria: string;
    imagen: string;
    puntaje?: PuntajeModel;

    constructor() {
        this.codigo = 0;
        this.titulo = "";
        this.precio = 0;
        this.descripcion = "";
        this.categoria = "";
        this.imagen = "";
        this.puntaje = new PuntajeModel();
    }
}