// import { DentalinkRepository } from '../../shared/infrastructure/dentalinkRepository';
// import { MongoRepository } from '../../shared/infrastructure/MongoRepository';
// import { DatesRepository } from '../../shared/infrastructure/DatesRepository';

export class UpdateProcess {
  private dentalink: any;
  private mongoDb: any;
  private dates: any;

  constructor(dentalinkRepository: any, persistRepository: any, datesRepository: any) {
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

    if (newPagos.length) {
      await this.mongoDb.save('Pagos', newPagos, 'id_pago_dentalink');
      const response = { msg: `Se actualizaron ${newPagos.length} pagos ` };
      return response;
    } else {
      const response = { msg: `No se encontraron nuevos pagos ` };
      return response;
    }
  }
  async updateLiquidaciones(): Promise<{ msg: string }> {
    const fechaInicio = this.dates.haceUnMes();
    const newLiquidaciones: Array<any> = await this.dentalink.updateLiquidaciones(fechaInicio);

    if (newLiquidaciones.length) {
      await this.mongoDb.save('Liquidaciones', newLiquidaciones, 'id_liquidacion_dentalink');
      const response = { msg: `Se actualizaron ${newLiquidaciones.length} liquidaciones ` };
      return response;
    } else {
      const response = { msg: `No se encontraron nuevas liquidaciones ` };
      return response;
    }
  }
}
