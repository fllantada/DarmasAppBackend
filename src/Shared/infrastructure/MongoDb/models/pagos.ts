import { Schema, model } from 'mongoose';
interface IPagos {
  id_pago_dentalink: number;
  id_paciente: string;
  id_medio_pago: string;
  id_sucursal: string;
  nombre_paciente: string;
  monto_pago: number;
  medio_pago: string;
  fecha_recepcion: Date;
  fecha_vencimiento: Date;
  nombre_sucursal: string;
  fecha_carga: Date;
}
const Pagos = new Schema<IPagos>({
  id_pago_dentalink: { type: Number, unique: true },
  id_paciente: String,
  id_medio_pago: String,
  id_sucursal: String,
  nombre_paciente: String,
  monto_pago: Number,
  medio_pago: String,
  fecha_recepcion: Date,
  fecha_vencimiento: Date,
  nombre_sucursal: String,
  fecha_carga: { type: Date, default: Date.now() }
});

export default model<IPagos>('Pagos', Pagos);
