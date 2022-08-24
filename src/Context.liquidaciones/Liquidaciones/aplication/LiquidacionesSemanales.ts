import { DentalinkRepository } from '../../../Shared/infrastructure/dentalinkRepository';
import { MongoRepository } from '../../../Shared/infrastructure/MongoRepository';
import { DatesRepository } from '../../../Shared/infrastructure/DatesRepository';

export class LiquidacionesSemanales {
  private dentalink: DentalinkRepository;
  private mongoDb: MongoRepository;
  private dates: DatesRepository;

  constructor(
    dentalinkRepository: DentalinkRepository,
    persistRepository: MongoRepository,
    datesRepository: DatesRepository
  ) {
    this.dentalink = dentalinkRepository;
    this.mongoDb = persistRepository;
    this.dates = datesRepository;
  }

  async run(): Promise<void> {
    //busco si hay nuevos pagos

    const newPagos = await this.getNewPagos();

    //Guardo los nuevos pagos en el repositorio persist

    await this.mongoDb.save('Pagos', newPagos, 'id_pago_dentalink');

    //busco las liquidaciones

    const newLiquidaciones: Array<any> = await this.getNewLiquidaciones();

    //Guardo las liquidaciones en el repositorio persist

    await this.mongoDb.save('Liquidaciones', newLiquidaciones, 'id_dentalink');

    console.log('tengo las liquidaciones y los pagos:', newLiquidaciones.length, newPagos.length);
    //guardo las liquidaciones en el repositorio persist
    this.dentalink.getPagosSemana('fechaInicio', 'fechaFin');

    this.dentalink.getLiquidacionesSemanales();

    //hago la logica de las liquidaciones
  }

  async getNewPagos(): Promise<Array<any>> {
    //Defino el rango de fechas
    const fechaInicio = this.dates.lunesSemanaAnterior();
    const fechaFin = this.dates.lunesEstaSemana();
    //Llamo a la funcion que busca los pagos nuevos en ese rango
    const newPagos = await this.dentalink.updatePagos(fechaInicio, fechaFin);
    //devuelvo los pagos
    return newPagos;
  }
  async getNewLiquidaciones(): Promise<Array<any>> {
    const fechaInicio = this.dates.haceUnMes();
    const newLiquidaciones: Array<any> = await this.dentalink.updateLiquidaciones(fechaInicio);
    return newLiquidaciones;
  }
}
