import { LiquidacionSemanalSede } from './valueObjects/LiquidacionSemanalSede';
import { PagoSede } from './valueObjects/PagoSede';
import { LiquidacionDentista } from './valueObjects/LiquidacionDentista';

export class LiquidacionSemanalSedeCreator implements LiquidacionSemanalSede {
  private nombreSucursal: string;
  public idSucursal: number;
  private idDentistas: Array<number> = [];
  private Efectivo = 0;
  private 'Mercadopago Dar Mas' = 0;
  private Bono = 0;
  private 'Mercadopago Especialista' = 0;
  private liquidacion = 0;
  private links: Array<string> = [];
  private fechaInicio: string;
  private fechaFin: String;

  constructor(nombreSucursal: string, idSucursal: number, fechaInicio: string, fechaFin: string) {
    this.nombreSucursal = nombreSucursal;
    this.idSucursal = idSucursal;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
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
    const dentista = liquidacion.id_dentista;

    if (!this.idDentistas.includes(dentista)) {
      this.idDentistas.push(dentista);
    }

    this.liquidacion += liquidacion.monto;
    if (liquidacion.link_detalle) {
      this.links.push(liquidacion.link_detalle);
    }
  }

  public getResumenLiquidacion() {
    return {
      nombre_sucursal: this.nombreSucursal,
      id_sucursal: this.idSucursal,
      id_dentistas: this.idDentistas,
      fecha_inicio: this.fechaInicio,
      fecha_fin: this.fechaFin,
      Efectivo: this.Efectivo,
      'Mercadopago Dar Mas': this['Mercadopago Dar Mas'],
      Bono: this.Bono,
      'Mercadopago Especialista': this['Mercadopago Especialista'],
      liquidacion: this.liquidacion,
      links: this.links
    };
  }
}
