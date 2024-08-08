import {Reserva, reservas} from "./model"

class ClienteParticular {
  reservas: Reserva[];

  constructor (reservas: Reserva[]) {
    this.reservas = reservas;
  }

  calculaPreciosReservas(): number {
    let total = 0;
    let costeHabitacion = 0;
    let costeAdicional = 0;

    this.reservas.forEach((reserva, index) => {
      if (reserva.tipoHabitacion === "standard") {
        costeHabitacion = 100;
      } else if (reserva.tipoHabitacion === "suite") {
        costeHabitacion = 150;
      };

      if (reserva.pax > 1) {
        costeAdicional = (reserva.pax - 1) * 40;
      };

      let subTotal = (costeHabitacion + costeAdicional) * reserva.noches
      let iva = (subTotal * 21) / 100;
      total = subTotal + iva;

      return console.log(`PARTICULAR: Reserva Nº ${index}: Tipo habitación: ${reserva.tipoHabitacion}. Personas: ${reserva.pax}. Subtotal: ${subTotal}€. IVA: ${iva}€. Total: ${total}€.`) ;
    });

    return total;
  };
}

const reservasTotales = new ClienteParticular(reservas);
reservasTotales.calculaPreciosReservas();

class TourOperador extends ClienteParticular {
  descuento: number;

  constructor(reservas: Reserva[]){
    super(reservas);
    this.descuento = 15;
  }

  calculaPreciosReservas(): number {
    let total = 0;
    let costeHabitacion = 100;
    let costeAdicional = 0;

    this.reservas.forEach((reserva, index) => {

      if (reserva.pax > 1) {
        costeAdicional = (reserva.pax - 1) * 40;
      };

      let subTotal = (costeHabitacion + costeAdicional) * reserva.noches;
      let iva = (subTotal * 21) / 100;
      total = subTotal + iva;
      let descuento = (total *15) / 100;
      total -= descuento;
      
      return console.log(`TOUR OPERADOR: Reserva Nº ${index}: Tipo habitación: ${reserva.tipoHabitacion}. Personas: ${reserva.pax}. Subtotal: ${subTotal}€. IVA: ${iva}€. Descuento: ${descuento}. Total: ${total}€.`) ;
    });
    return total;
  };
}

const descuentos = new TourOperador(reservas);
descuentos.calculaPreciosReservas()



