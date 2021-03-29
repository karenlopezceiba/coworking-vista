import { Persona } from "src/app/feature/persona/shared/model/persona";

export class Reserva {
    identificacionPersona: number;
    fechaReserva: string;
    estado: boolean = true;
    valorAPagar: number;
    persona: Persona;

}
