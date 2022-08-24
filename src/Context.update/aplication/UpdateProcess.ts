import { DentalinkRepository } from '../../shared/infrastructure/dentalinkRepository';
import { MongoRepository } from '../../shared/infrastructure/MongoRepository';
import { DatesRepository } from '../../shared/infrastructure/DatesRepository';

export class UpdateProcess {
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
    const pagosResponse = await this.updatePagos();
    console.log(pagosResponse.msg);
    const liquidacionesResponse = await this.updateLiquidaciones();
    console.log(liquidacionesResponse.msg);
    Promise.all([pagosResponse, liquidacionesResponse]).then(() => {
      console.log('termine el proceso');
    });
  }

  async updatePagos(): Promise<{ msg: string }> {
    const fechaInicio = this.dates.lunesSemanaAnterior();
    const fechaFin = this.dates.lunesEstaSemana();
    const newPagos = await this.dentalink.updatePagos(fechaInicio, fechaFin);
    newPagos.length && (await this.mongoDb.save('Pagos', newPagos, 'id_pago_dentalink'));
    return { msg: `Se actualizaron ${newPagos.length} pagos ` };
  }
  async updateLiquidaciones(): Promise<{ msg: string }> {
    const fechaInicio = this.dates.haceUnMes();
    const newLiquidaciones: Array<any> = await this.dentalink.updateLiquidaciones(fechaInicio);
    newLiquidaciones.length && (await this.mongoDb.save('Liquidaciones', newLiquidaciones, 'id_dentalink'));
    return { msg: `Se actualizaron ${newLiquidaciones.length} liquidaciones ` };
  }
}
