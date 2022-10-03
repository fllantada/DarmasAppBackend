import { DatesRepository } from '../../../../../Shared/infrastructure/DatesRepository';
import { DentalinkRepository } from '../../../../../Shared/infrastructure/dentalinkRepository';
import { MongoRepository } from '../../../../../Shared/infrastructure/MongoRepository';

export default async function updateLiquidacionesSemana(): Promise<{ msg: string }> {
  console.log('Iniciando  update de liquidaciones semana con fechas:');
  const fechaInicio = new DatesRepository().haceUnMes();
  const newLiquidaciones = await new DentalinkRepository().updateLiquidaciones(fechaInicio);
  let response = { msg: '' };

  console.log('fechaInicio: ', fechaInicio);

  if (newLiquidaciones.length) {
    await new MongoRepository().save('Liquidaciones', newLiquidaciones, 'id_dentalink');

    response = { msg: `Se actualizaron ${newLiquidaciones.length} liquidaciones ` };
  } else {
    response = { msg: `No se encontraron nuevas Liquidaciones` };
  }
  console.log('response: ', response);
  return response;
}
