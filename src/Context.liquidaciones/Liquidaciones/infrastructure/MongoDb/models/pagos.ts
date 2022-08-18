import { Schema, model, models } from 'mongoose';

const Pagos = new Schema({
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

export default models?.Pagos || model('Pagos', Pagos);
