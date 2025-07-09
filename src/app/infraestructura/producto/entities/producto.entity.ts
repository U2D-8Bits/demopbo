import { PuntajeEntity } from "./puntaje.entity";

export interface ProductoEntity {
    id:             number;
    title:          string;
    price:          number;
    description:    string;
    category:       string;
    image:          string;
    rating?:        PuntajeEntity;
}