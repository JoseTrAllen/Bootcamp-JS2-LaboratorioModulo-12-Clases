import { Reserva, reservas } from  "./model";

class ReservasHotel {
  reservas: Reserva[];
  precioStandard: number;
  precioSuite: number;
  costeAdicional: number;

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
    this.precioStandard = 100;
    this.precioSuite = 150;
    this.costeAdicional = 40;
  }

  calculaSubTotal() {
    
  }
}