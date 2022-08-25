import { LiquidacionSemanalSede } from './valueObjects/LiquidacionSemanalSede';
import { PagoSede } from './valueObjects/PagoSede';
import { LiquidacionDentista } from './valueObjects/LiquidacionDentista';

export class LiquidacionSemanalSedeCreator implements LiquidacionSemanalSede {
  private nombre_sucursal: string;
  public id_sucursal: number;
  private id_dentistas: Array<string> = [''];
  private Efectivo = 0;
  private 'Mercadopago Dar Mas' = 0;
  private Bono = 0;
  private 'Mercadopago Especialista' = 0;
  private liquidacion = 0;
  private links: Array<string> = [];
  private fecha_inicio: string;
  private fecha_fin: String;

  constructor(nombreSucursal: string, idSucursal: number, fechaInicio: string, fechaFin: string) {
    this.nombre_sucursal = nombreSucursal;
    this.id_sucursal = idSucursal;
    this.fecha_inicio = fechaInicio;
    this.fecha_fin = fechaFin;
  }

  agregarPago(pago: PagoSede) {
    switch (pago.medio_pago) {
      case 'Efectivo':
        this.Efectivo += pago.monto;
        break;
      case 'Mercadopago Dar Mas':
        this['Mercadopago Dar Mas'] += pago.monto;
        break;
      case 'Bono':
        this.Bono += pago.monto;
        break;
      case 'Mercadopago Especialista':
        this['Mercadopago Especialista'] += pago.monto;
        break;
    }
  }

  agregarLiquidacion(liquidacion: LiquidacionDentista) {
    const dentista = liquidacion.id_dentista.toString();

    if (!this.id_dentistas.includes(dentista)) {
      this.id_dentistas.push(dentista);
    }

    this.liquidacion += liquidacion.monto;
    if (liquidacion.link_detalle) {
      this.links.push(liquidacion.link_detalle);
    }
  }

  public getResumenLiquidacion() {
    return {
      nombre_sucursal: this.nombre_sucursal,
      id_sucursal: this.id_sucursal,
      id_dentistas: this.id_dentistas,
      fecha_inicio: this.fecha_inicio,
      fecha_fin: this.fecha_fin,
      Efectivo: this.Efectivo,
      'Mercadopago Dar Mas': this['Mercadopago Dar Mas'],
      Bono: this.Bono,
      'Mercadopago Especialista': this['Mercadopago Especialista'],
      liquidacion: this.liquidacion,
      links: this.links
    };
  }
}
