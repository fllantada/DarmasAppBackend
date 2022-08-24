import { Schema, model } from 'mongoose';
interface ISedes {
  id_dentalink: number;

  name: string;
  direccion: string;
  citas: string;
  cajas: string;
}

const Sedes = new Schema<ISedes>({
  id_dentalink: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  direccion: String,
  citas: String,
  cajas: String
});

export default model<ISedes>('Sedes', Sedes);
