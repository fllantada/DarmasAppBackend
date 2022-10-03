//import { Task } from 'src/Context.update/domain/valueobjects/Task';
import { updateSedes } from './updateSedes';
//import updateLiquidacionesSemana from './updateLiquidacionesSemana';

export default {
  name: 'sedes',
  action: updateSedes,
  interval: 'Diario',
  status: 'on'
};
