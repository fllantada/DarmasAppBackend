export interface LiquidacionDentista {
  id_sucursal: number;
  id_dentista: number;
  nombre_sucursal: string;
  monto: number;
  link_detalle?: string;
}
