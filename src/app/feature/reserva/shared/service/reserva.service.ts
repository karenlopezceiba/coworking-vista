import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';

@Injectable()
export class ReservaService {
  constructor(protected http: HttpService) { }

  public crear(reserva: Reserva){
    console.log(reserva);
    return this.http.doPost<Reserva, boolean>(`${environment.endpoint}/reservas`, reserva, this.http.optsName('crear Reserva'));
  }

  public listarReservas(idPersona:number) {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas/${idPersona}`, this.http.optsName('listar Reservas'));
  }

  public eliminarReserva(idReserva: number){
    return this.http.doDelete<boolean>(`${environment.endpoint}/reservas/${idReserva}`, this.http.optsName('eliminar Reserva'));
  }
}
