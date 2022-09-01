import { LiquidacionDentista } from './LiquidacionDentista';
import { PagoSede } from './PagoSede';

export interface LiquidacionSemanalSede {
  getResumenLiquidacion(): {
    nombre_sucursal: string;
    id_sucursal: number;
    id_dentistas: Array<number>;
    Efectivo: number;
    'Mercadopago Dar Mas': number;
    Bono: number;
    'Mercadopago Especialista': number;
    liquidacion: number;
    links: Array<string>;
    fecha_inicio: string;
    fecha_fin: string;
  };
  agregarPago(pago: PagoSede): void;
  agregarLiquidacion(liquidacion: LiquidacionDentista): void;
}
