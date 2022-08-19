import { LiquidacionesSemanalesRepository } from '../domain/LiquidacionesSemanalesRepository';
import { Dentalink } from './Dentalink/Dentalink';

export class DentalinkRepository implements LiquidacionesSemanalesRepository {
  constructor() {}

  updatePagos(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateLiquidaciones(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async getPagosSemana(fechaInicio: string, fechaFin: string): Promise<any> {
    const dentalink = new Dentalink({});
    const url = dentalink.url();
    console.log(url);
  }
  getLiquidacionesSemanales(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
