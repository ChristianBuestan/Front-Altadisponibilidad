//import { Persona } from "./persona";

import { Detalle } from "./detalle";
import { Persona } from "./persona";

export class Factura{
    codigo?: number;
    numero?: string;
    total?: number;
    cliente?: Persona;
    detalles?: Array<Detalle>;
}