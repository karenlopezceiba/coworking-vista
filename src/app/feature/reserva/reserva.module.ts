import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ReservaRoutingModule } from './reserva-routing.module';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { EliminarReservaComponent } from './components/eliminar-reserva/eliminar-reserva.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import {ReservaService} from './shared/service/reserva.service';



@NgModule({
  declarations: [CrearReservaComponent, ListarReservaComponent, EliminarReservaComponent, ReservaComponent],
  imports: [
    ReservaRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [ReservaService],
  bootstrap: [ReservaComponent]
})
export class ReservaModule { }
