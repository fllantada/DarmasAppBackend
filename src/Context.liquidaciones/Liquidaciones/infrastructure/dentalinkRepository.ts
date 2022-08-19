import { LiquidacionesSemanalesRepository } from '../domain/LiquidacionesSemanalesRepository';
import { Dentalink } from './Dentalink/Dentalink';

export class DentalinkRepository implements LiquidacionesSemanalesRepository {
  constructor() {}

  async updatePagos(): Promise<void> {
    console.log('Entre update pagos');
  }
  async updateLiquidaciones(): Promise<void> {
    console.log('Entre update liquidaciones');
  }

  async getPagosSemana(fechaInicio: string, fechaFin: string): Promise<any> {
    const dentalink = new Dentalink({});
    const url = dentalink.url();
    console.log(url);
  }
  async getLiquidacionesSemanales(): Promise<any> {
    console.log('Entre a getLiquidacionesSemanales');
  }
}
