import { LiquidacionDentista } from './LiquidacionDentista';
import { PagoSede } from './PagoSede';

export interface LiquidacionSemanalSede {
  getResumenLiquidacion(): {
    nombre_sucursal: string;
    id_sucursal: number;
    id_dentistas: Array<string>;
    Efectivo: number;
    'Mercadopago Dar Mas': number;
    Bono: number;
    'Mercadopago Especialista': number;
    liquidacion: number;
    links: Array<string>;
    fecha_inicio: string;
    fecha_fin: String;
  };
  agregarPago(pago: PagoSede): void;
  agregarLiquidacion(liquidacion: LiquidacionDentista): void;
}
