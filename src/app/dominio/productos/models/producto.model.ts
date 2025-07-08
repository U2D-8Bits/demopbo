import { PuntajeModel } from "./puntaje.model";

export interface ProductoModel {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      PuntajeModel;
}
