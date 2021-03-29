import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from '../../shared/model/reserva';
import { ReservaService } from '../../shared/service/reserva.service';
import { Persona } from 'src/app/feature/persona/shared/model/persona';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {

  public reserva: Reserva = new Reserva();
  public persona: Persona = new Persona();

  constructor(protected reservaServicio: ReservaService, protected router: Router) { }

  ngOnInit(): void {
    
  }

  public crear(): void{
    this.reservaServicio.crear(this.reserva).subscribe(
      () => {
        this.router.navigate(['/reserva'])
      }
    )
  }

}
