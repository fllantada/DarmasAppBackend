//import { LiquidacionesSemanales } from './LiquidacionesSemanales';

export interface LiquidacionesSemanalesRepository {
  updatePagos(): Promise<void>;
  updateLiquidaciones(): Promise<void>;
  getPagosSemana(fecha_inicio: string, fecha_fin: string): Promise<any>;
  getLiquidacionesSemanales(): Promise<any>;
}
