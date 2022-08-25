import { LiquidacionDentista } from './valueObjects/LiquidacionDentista';
import { PagoSede } from './valueObjects/PagoSede';
import { Sede } from './valueObjects/Sede';

export interface LiquidacionesRepository {
  getPagosSemanales(): Promise<Array<PagoSede>>;
  getLiquidacionesSemanales(): Promise<Array<LiquidacionDentista>>;
  getSedes(): Promise<Array<Sede>>;
}
