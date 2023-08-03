import { Product } from "./product";

//mismo formato en como lo cree en eclipse, asi como los nombres
export class Detalle{
    producto?: Product;
    cantidad?: number;
    precioUnitario?: number;
    ///debe ser un producto de cantidad*precio unitario
    subtotal?: number;
}