import { Reserva, reservas } from "./model";

console.log("---------CASO 1--------");

class ClienteParticular {
  reservas: Reserva[];

  constructor(reservas: Reserva[]){
    this.reservas = reservas;
  }

  calcularPrecioReservas(): void{
    this.reservas.forEach((reserva, index) => {
      let costeTipoHabitacion = reserva.tipoHabitacion === "standard" ? 100 : 150;
      let costeAdicionalPersona = reserva.pax > 1 ? (reserva.pax - 1) * 40 :0;
      let costeAdicionalDesayuno = reserva.desayuno ? (reserva.pax * 15) : 0;

      let subTotal = (costeTipoHabitacion + costeAdicionalPersona + costeAdicionalDesayuno) * reserva.noches;
      let iva = (subTotal * 21) / 100;
      let total = subTotal + iva;
      
      console.log(`PARTICULAR: Reserva Nº ${index}: Tipo habitación: ${reserva.tipoHabitacion}. Personas: ${reserva.pax}. Noches: ${reserva.noches}. Desayuno: ${reserva.desayuno}. Subtotal: ${subTotal.toFixed(2)}€. Iva: ${iva.toFixed(2)}€. Total: ${total.toFixed(2)}€`);
    });
  };
}

const particular = new ClienteParticular(reservas);
particular.calcularPrecioReservas();

console.log("---------CASO 2--------");

class TourOperador extends ClienteParticular {
  descuento: number;

  constructor(reservas: Reserva[], ){
    super(reservas);
    this.descuento = 15;
  }

  calcularPrecioReservas(): void {
    this.reservas.forEach((reserva, index) => {
      
      let costeTipoHabitacion = 100;
      let costeAdicionalPersona = reserva.pax > 1 ? (reserva.pax - 1) * 40 : 0;
      let costeAdicionalDesayuno = reserva.desayuno ? (reserva.pax * 15) : 0;

      let subTotal = (costeTipoHabitacion + costeAdicionalPersona + costeAdicionalDesayuno) * reserva.noches;
      let iva = (subTotal * 21) / 100;
      let total = subTotal + iva;
      let descuento = (total * 15) / 100;
      let totalConDescuento = total - descuento;

      console.log(`TOUR-OPERADOR: Reserva Nº ${index}: Tipo habitación: ${reserva.tipoHabitacion}. Personas: ${reserva.pax}. Noches: ${reserva.noches}. Desayuno: ${reserva.desayuno} Subtotal: ${subTotal.toFixed(2)}€. Iva: ${iva.toFixed(2)}€. Descuento: ${descuento.toFixed(2)}€. Total: ${totalConDescuento.toFixed(2)}€`);
    });
  };
}

const tourOperador = new TourOperador(reservas);
tourOperador.calcularPrecioReservas();



