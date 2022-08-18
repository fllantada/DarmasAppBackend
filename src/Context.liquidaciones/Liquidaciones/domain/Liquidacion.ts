export interface Liquidacion {
  readonly nombre_sucursal: string;
  readonly mercadopago_darmas: string;
  readonly id_sucursal: string;
  readonly efectivo: number;
  readonly fecha_inicio: string;
  readonly fecha_fin: string;
  readonly liquidacion: number;
  readonly link_detalle?: string | null;
}
