import { DentalinkRepository } from '../infrastructure/dentalinkRepository';
import { MongoRepository } from '../infrastructure/MongoRepository';
import { DatesRepository } from '../infrastructure/DatesRepository';

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
    console.log('Inicie App de LiquidacionesSemanales');

    this.dentalink.updatePagos();
    this.dentalink.updateLiquidaciones();
    console.log(this.dates.lunesEstaSemana());
    console.log('Dates llamado');
    const pagosSemana = this.dentalink.getPagosSemana('2020-01-01', '2020-01-07');
    const liquidacionesSemana = this.dentalink.getLiquidacionesSemanales();
    console.log(pagosSemana, liquidacionesSemana);
    console.log(this.mongoDb);

    this.mongoDb.getCollection('Pagos');
  }
}
