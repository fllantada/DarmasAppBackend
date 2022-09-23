import updateLiquidacionesSemana from './updateLiquidacionesSemana';

export default {
  name: 'liquidaciones',
  action: updateLiquidacionesSemana,
  interval: 'Diario',
  status: 'on'
};
