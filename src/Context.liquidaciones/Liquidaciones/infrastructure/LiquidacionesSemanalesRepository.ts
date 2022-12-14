import { PagoSede } from '../domain/valueObjects/PagoSede';
import { LiquidacionesRepository } from '../domain/LiquidacionesRepository';
import { LiquidacionDentista } from '../domain/valueObjects/LiquidacionDentista';

export class LiquidacionesSemanalesRepository implements LiquidacionesRepository {
  private dates: any;
  private dataBase: any;
  public fechaInicio: string;
  public fechaFin: string;
  constructor(mongoRepository: any, datesRepository: any) {
    this.dates = datesRepository;
    this.dataBase = mongoRepository;
    this.fechaInicio = this.dates.lunesSemanaAnterior();
    this.fechaFin = this.dates.lunesEstaSemana();
  }

  async getPagosSemanales(): Promise<Array<PagoSede>> {
    const filter = {
      fecha_recepcion: {
        $gte: this.dates.lunesSemanaAnterior()
      },
      fecha_vencimiento: {
        $lt: this.dates.lunesEstaSemana()
      }
    };

    const pagos = await this.dataBase.find('Pagos', filter);
    const pagosSede: Array<PagoSede> = pagos.map((pago: any) => ({
      id_sucursal: Number(pago.id_sucursal),
      medio_pago: pago.medio_pago,
      monto: Number(pago.monto_pago)
    }));
    return pagosSede;
  }
  async getLiquidacionesSemanales(): Promise<Array<LiquidacionDentista>> {
    const filter = {
      $and: [
        { fecha_termino: { $lt: this.dates.lunesEstaSemana() } },
        { fecha_termino: { $gte: this.dates.lunesSemanaAnterior() } }
      ]
    };
    const liquidaciones = await this.dataBase.find('Liquidaciones', filter);
    const liquidacionesDentistas = liquidaciones.map((liquidacion: any) => ({
      id_sucursal: Number(liquidacion.id_sucursal),
      id_dentista: Number(liquidacion.id_dentista),
      monto: Number(liquidacion.monto),
      link_detalle: liquidacion.link_detalle
    }));
    return liquidacionesDentistas;
  }

  async getSedes(): Promise<any> {
    const sedes = this.dataBase.find('Sedes');
    return sedes;
  }
}
