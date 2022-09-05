import { DatesRepository } from 'src/Shared/infrastructure/DatesRepository';
import { DentalinkRepository } from 'src/Shared/infrastructure/dentalinkRepository';

export default async function updateLiquidacionesSemana(repository: any): Promise<{ msg: string }> {
  const fechaInicio = new DatesRepository().haceUnMes();
  const newLiquidaciones = await new DentalinkRepository().updateLiquidaciones(fechaInicio);
  let response = { msg: '' };

  if (newLiquidaciones.length) {
    await repository.save('Liquidaciones', newLiquidaciones, 'id_dentalink');
    response = { msg: `Se actualizaron ${newLiquidaciones.length} liquidaciones ` };
  } else {
    response = { msg: `No se encontraron nuevas Liquidaciones` };
  }
  return response;
}
