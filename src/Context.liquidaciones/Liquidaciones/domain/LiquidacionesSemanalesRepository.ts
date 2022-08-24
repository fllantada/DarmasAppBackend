//import { LiquidacionesSemanales } from './LiquidacionesSemanales';

export interface LiquidacionesSemanalesRepository {
  updatePagos(fechaInicio: string, fechaFin: string): Promise<Array<any>>;
  updateLiquidaciones(fechaInicio: string): Promise<Array<any>>;
  getPagosSemana(fechaInicio: string, fechaFin: string): Promise<any>;
  getLiquidacionesSemanales(): Promise<any>;
}
