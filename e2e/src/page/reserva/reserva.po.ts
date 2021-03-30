import { by, element } from 'protractor';

export class ReservaPage{
    private linkCrearReserva = element(by.xpath('/html/body/app-root/app-reserva/div/div[1]/ul/li[1]/a'));
    private linkConsultarReservas = element(by.xpath('/html/body/app-root/app-reserva/div/div[1]/ul/li[2]/a'));
    private inputNombrePersona = element(by.id('nombreCrearReserva'));
    private inputNumeroDocumentoPersona = element(by.id('numeroDocumentoCrearReserva'));
    private inputFechaReserva = element(by.id('fechaCrearReserva'));
    private inputConsultaNumeroDocumentoPersona = element(by.id('numeroDocumentoConsultaReserva'));
    private listaReservas = element.all(by.css('.reservas tr'));
    private botonConsultarReservas = element(by.id('botonBuscarReserva'));
    private botonCrearReserva = element(by.id('botonCrearReserva'));
    private botonConfirmar = element(by.css('.swal2-confirm'));
    private botonEliminarReserva = element(by.xpath('/html/body/app-root/app-reserva/div/div[2]/app-listar-reserva/div/div[2]/table/tbody/tr[1]/td[5]/button'));

    async clickCrearReserva(){
        await this.linkCrearReserva.click();
    }

    async clickConsultarReservas(){
        await this.linkConsultarReservas.click();
    }

    async clickBotonConsultarReservas(){
        await this.botonConsultarReservas.click();
    }

    async clickBotonCrearReserva(){
        await this.botonCrearReserva.click();
    }

    async clickBotonConfirmar(){
        await this.botonConfirmar.click();
    }

    async clickBotonEliminarReserva(){
        await this.botonEliminarReserva.click();
    }

    async ingresarNumeroDocumentoPersona(numeroDocumentoPersona){
        await this.inputNumeroDocumentoPersona.sendKeys(numeroDocumentoPersona);
    }

    async ingresarNombrePersona(nombrePersona){
        await this.inputNombrePersona.sendKeys(nombrePersona);
    }

    async ingresarFechaReserva(fechaReserva){
        await this.inputFechaReserva.sendKeys(fechaReserva);
    }

    async ingresarNumeroDocumentoConsulta(numeroDocumentoPersona){
        await this.inputConsultaNumeroDocumentoPersona.sendKeys(numeroDocumentoPersona);
    }

    async contarReservas(){
        return this.listaReservas.count();
    }

}