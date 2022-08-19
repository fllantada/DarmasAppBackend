//import { LiquidacionesSemanales } from './LiquidacionesSemanales';

export interface LiquidacionesSemanalesRepository {
  updatePagos(): Promise<void>;
  updateLiquidaciones(): Promise<void>;
  getPagosSemana(fechaInicio: string, fechaFin: string): Promise<any>;
  getLiquidacionesSemanales(): Promise<any>;
}
