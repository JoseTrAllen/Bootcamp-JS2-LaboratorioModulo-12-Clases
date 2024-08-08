import { Reserva, reservas } from  "./model";

console.log("---------DESAFIO--------");

class Reservas {
  reservas: Reserva[];
  precioStandard: number;
  precioSuite: number;
  costeAdicional: number;
  descuento: number;

  constructor(reservas: Reserva[], precioStandard: number, precioSuite: number, costeAdicional: number, descuento: number) {
    this.reservas = reservas;
    this.precioStandard = precioStandard;
    this.precioSuite = precioSuite;
    this.costeAdicional = costeAdicional;
    this.descuento = descuento;
  }

  metodoPrecioReservas(reserva: Reserva) {
    
      let costeHabitacion = reserva.tipoHabitacion === "standard" ? this.precioStandard : this.precioSuite;
      let costeAdicionalPersona = reserva.pax > 1 ? (reserva.pax - 1) * this.costeAdicional : 0;
      let costeAdicionalDesayuno = reserva.desayuno ? (reserva.pax * 15) : 0;

      let subtotal = (costeHabitacion + costeAdicionalPersona + costeAdicionalDesayuno) * reserva.noches;
      let iva = (subtotal * 21) / 100;
      let total = subtotal + iva;

      return {subtotal, iva, total};
    
  }
}

class ClienteParticular extends Reservas{

  constructor(reservas: Reserva[]){
    super(reservas, 100, 150, 40, 0);
  }

  calculaPrecioReservas(){
    this.reservas.forEach((reserva, index) => {
      const { subtotal, iva, total } = this.metodoPrecioReservas(reserva);
      console.log(`PARTICULAR: Reserva Nº ${index}: Tipo habitación: ${reserva.tipoHabitacion}. Personas: ${reserva.pax}. Noches: ${reserva.noches}. Desayuno: ${reserva.desayuno}. Subtotal: ${subtotal}€. Iva: ${iva}€. Total: ${total.toFixed(2)}€`);
      
    });
  };
}

const inst = new ClienteParticular(reservas);
inst.calculaPrecioReservas();

console.log("");

class TourOperador extends Reservas{

  constructor(reservas: Reserva[]){
    super(reservas, 100, 100, 40, 15);
  }

  calculaPrecioReservas(){
    this.reservas.forEach((reserva, index) => {
      let { subtotal, iva, total } = this.metodoPrecioReservas(reserva);
      let descuento = (total * this.descuento) / 100;
      total -= descuento;
      console.log(`TOUR-OPERADOR: Reserva Nº ${index}: Tipo habitación: ${reserva.tipoHabitacion}. Personas: ${reserva.pax}. Noches: ${reserva.noches}. Desayuno: ${reserva.desayuno}. Subtotal: ${subtotal}€. Iva: ${iva}€. Descuento: ${descuento}€. Total: ${total.toFixed(2)}€`);
    });
  };
}

const tourOperador = new TourOperador(reservas);
tourOperador.calculaPrecioReservas();