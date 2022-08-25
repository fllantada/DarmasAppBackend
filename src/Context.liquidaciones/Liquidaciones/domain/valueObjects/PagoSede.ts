export interface PagoSede {
  id_sucursal: number;
  medio_pago: 'Efectivo' | 'Mercadopago Dar Mas' | 'Bono' | 'Mercadopago Especialista';
  monto: number;
}
