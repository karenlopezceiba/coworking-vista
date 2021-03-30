import { Persona } from "src/app/feature/persona/shared/model/persona";

export class Reserva {
    id: number;
    identificacionPersona: number;
    fechaReserva: string;
    estado: boolean = true;
    valorAPagar: number = 10000;
    persona: Persona;

}
