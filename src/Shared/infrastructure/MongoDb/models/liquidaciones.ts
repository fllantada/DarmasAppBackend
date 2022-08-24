import { Schema, model } from 'mongoose';
interface ILiquidaciones {
  id_dentalink: number;
  id_dentista: String;
  id_sucursal: String;
  fecha_inicio: Date;
  fecha_termino: Date;
  monto: Number;
  activa: Number;
  link_detalle: String;
  fecha_carga: { type: Date };
}
const Liquidaciones = new Schema<ILiquidaciones>({
  id_dentalink: { type: Number, unique: true },
  id_dentista: String,
  id_sucursal: String,
  fecha_inicio: Date,
  fecha_termino: Date,
  monto: Number,
  activa: Number,
  link_detalle: String,
  fecha_carga: { type: Date, default: Date.now() }
});

export default model<ILiquidaciones>('Liquidaciones', Liquidaciones);
