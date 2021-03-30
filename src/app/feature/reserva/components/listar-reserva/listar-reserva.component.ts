import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent {

  numeroDocumentoPersona: number;
  public listaReservas: Reserva[];

  constructor(protected reservaServicio: ReservaService, protected router: Router) { }


  public buscar(): void{
    this.reservaServicio.listarReservas(this.numeroDocumentoPersona).subscribe(
        response => this.listaReservas = response
      );
    console.log(this.listaReservas);
  }

  public eliminar(reserva: Reserva): void{
    console.log(reserva);
    this.router.navigate([`/reserva/eliminar/${reserva.id}`]);
  }

}
