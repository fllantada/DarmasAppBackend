import { DentalinkRepository } from '../infrastructure/dentalinkRepository';
import { MongoRepository } from '../infrastructure/MongoRepository';

export class LiquidacionesSemanales {
  private dentalink: DentalinkRepository;
  private mongoDb: MongoRepository;

  constructor(dentalinkRepository: DentalinkRepository, persistRepository: MongoRepository) {
    this.dentalink = dentalinkRepository;
    this.mongoDb = persistRepository;
  }

  async run(): Promise<void> {
    console.log('Inicie la app de liquidaciones semanales');
    this.dentalink.updatePagos();
    this.dentalink.updateLiquidaciones();
    const pagosSemana = this.dentalink.getPagosSemana('2020-01-01', '2020-01-07');
    const liquidacionesSemana = this.dentalink.getLiquidacionesSemanales();
    console.log(pagosSemana, liquidacionesSemana);
    console.log(this.mongoDb);

    this.mongoDb.getCollection('Pagos');
  }
}
