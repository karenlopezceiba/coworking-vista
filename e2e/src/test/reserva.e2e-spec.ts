import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ReservaPage } from '../page/reserva/reserva.po';

describe('workspace-project Reserva', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let reserva: ReservaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        reserva = new ReservaPage();
    });

   it('Deberia crear reserva', () => {
       
        const NUMERO_IDENTIFICACION_PERSONA = '9999000';
        const NOMBRE_PERSONA = 'persona de pruebas';
        const FECHA_RESERVA = '13-04-2021';
        
        page.navigateTo();
        navBar.clickBotonReservas();
        reserva.clickCrearReserva();
        reserva.ingresarNumeroDocumentoPersona(NUMERO_IDENTIFICACION_PERSONA);
        reserva.ingresarNombrePersona(NOMBRE_PERSONA);
        reserva.ingresarFechaReserva(FECHA_RESERVA);
        reserva.clickBotonCrearReserva();
        reserva.clickBotonConfirmar();
        reserva.clickConsultarReservas();
        reserva.ingresarNumeroDocumentoConsulta(NUMERO_IDENTIFICACION_PERSONA);
        reserva.clickBotonConsultarReservas();
        
        expect(1).toBe(reserva.contarReservas());
    });

    it('Deberia consultar reservas', () => {
        const NUMERO_IDENTIFICACION_PERSONA = '9999000';

        page.navigateTo();
        navBar.clickBotonReservas();
        reserva.clickConsultarReservas();
        reserva.ingresarNumeroDocumentoConsulta(NUMERO_IDENTIFICACION_PERSONA);
        reserva.clickBotonConsultarReservas();
        
        expect(1).toBe(reserva.contarReservas());
    });

    it('Deberia eliminar reserva', () => {
        const NUMERO_IDENTIFICACION_PERSONA = '9999001';
        const NOMBRE_PERSONA = 'persona de pruebas';
        const FECHA_RESERVA = '27-04-2021';

        page.navigateTo();
        navBar.clickBotonReservas();
        reserva.clickCrearReserva();
        reserva.ingresarNumeroDocumentoPersona(NUMERO_IDENTIFICACION_PERSONA);
        reserva.ingresarNombrePersona(NOMBRE_PERSONA);
        reserva.ingresarFechaReserva(FECHA_RESERVA);
        reserva.clickBotonCrearReserva();
        reserva.clickBotonConfirmar();
        reserva.clickConsultarReservas();
        reserva.ingresarNumeroDocumentoConsulta(NUMERO_IDENTIFICACION_PERSONA);
        reserva.clickBotonConsultarReservas();
        reserva.clickBotonEliminarReserva();
        reserva.clickBotonConfirmar();
        reserva.clickConsultarReservas();
        reserva.ingresarNumeroDocumentoConsulta(NUMERO_IDENTIFICACION_PERSONA);
        reserva.clickBotonConsultarReservas();
        expect(0).toBe(reserva.contarReservas());
    });
});