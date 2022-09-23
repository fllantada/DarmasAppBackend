//import { Task } from '../../../../../src/Context.update/domain/valueobjects/Task';
import updatePagosSemana from './updatePagosSemana';
//import updateLiquidacionesSemana from './updateLiquidacionesSemana';

export default {
  name: 'pagos',
  action: updatePagosSemana,
  interval: 'Diario',
  status: 'on'
};
