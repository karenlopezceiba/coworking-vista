import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';
import { throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable()
export class ReservaService {
  constructor(protected http: HttpService) { }

  public crear(reserva: Reserva){
    return this.http.doPost<Reserva, boolean>(`${environment.endpoint}/reservas`, reserva, this.http.optsName('crear Reserva')).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire('Error al crear la reserva', `${e.error.mensaje}`, 'error');
        return throwError(e);
      }),
      tap(_  => {
        swal.fire('Reserva creada', `Reserva para la fecha ${reserva.fechaReserva}  a nombre de ${reserva.persona.nombre} con identificacion numero ${reserva.persona.id} fue creada con éxito`, 'success');
      })
    );
  }

  public listarReservas(idPersona:number) {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas/${idPersona}`, this.http.optsName('listar Reservas'));
  }

  public eliminarReserva(idReserva: number){
    return this.http.doDelete<boolean>(`${environment.endpoint}/reservas/${idReserva}`, this.http.optsName('eliminar Reserva')).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire('Error al eliminar la reserva', 'no pudimos encontrar esa reserva', 'error');
        return throwError(e);
      }),
      tap(_ => {
        swal.fire('Reserva eliminada', 'La reserva fue eliminada con exito', 'success');
      })
    );
  }
}
