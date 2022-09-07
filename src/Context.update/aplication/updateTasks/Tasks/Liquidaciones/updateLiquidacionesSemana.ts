import { DatesRepository } from '../../../../../Shared/infrastructure/DatesRepository';
import { DentalinkRepository } from '../../../../../Shared/infrastructure/dentalinkRepository';
import { MongoRepository } from '../../../../../Shared/infrastructure/MongoRepository';

export default async function updateLiquidacionesSemana(): Promise<{ msg: string }> {
  const fechaInicio = new DatesRepository().haceUnMes();
  const newLiquidaciones = await new DentalinkRepository().updateLiquidaciones(fechaInicio);
  let response = { msg: '' };

  if (newLiquidaciones.length) {
    await new MongoRepository().save('Liquidaciones', newLiquidaciones, 'id_dentalink');

    response = { msg: `Se actualizaron ${newLiquidaciones.length} liquidaciones ` };
  } else {
    response = { msg: `No se encontraron nuevas Liquidaciones` };
  }
  return response;
}
