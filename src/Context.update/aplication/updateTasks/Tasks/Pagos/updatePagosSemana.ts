import { DatesRepository } from '../../../../../Shared/infrastructure/DatesRepository';
import { DentalinkRepository } from '../../../../../Shared/infrastructure/dentalinkRepository';
import { MongoRepository } from '../../../../../Shared/infrastructure/MongoRepository';

export default async function updatePagosSemana(repository: any): Promise<{ msg: string }> {
  const fechaInicio = new DatesRepository().lunesSemanaAnterior();
  const fechaFin = new DatesRepository().lunesEstaSemana();
  let response = { msg: '' };

  const newPagos = await new DentalinkRepository().updatePagos(fechaInicio, fechaFin);

  if (newPagos.length) {
    await new MongoRepository().save('Pagos', newPagos, 'id_pago_dentalink');
    response = { msg: `Se actualizaron ${newPagos.length} pagos ` };
  } else {
    response = { msg: `No se encontraron nuevos pagos ` };
  }
  return response;
}
