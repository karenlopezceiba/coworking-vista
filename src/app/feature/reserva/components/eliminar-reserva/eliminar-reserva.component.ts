import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../shared/service/reserva.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-reserva',
  templateUrl: './eliminar-reserva.component.html',
  styleUrls: ['./eliminar-reserva.component.css']
})
export class EliminarReservaComponent implements OnInit {

  constructor(protected reservaServicio: ReservaService, protected router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.eliminarReserva();
  }

  eliminarReserva(){
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['idReserva']
        if(id){
          this.reservaServicio.eliminarReserva(id).subscribe(
            () => {
              this.router.navigate(['/reserva']),
              swal.fire('Reserva eliminada', 'La reserva fue eliminada con exito', 'success')
            }
          )
        }
      }
    )
  }

}
