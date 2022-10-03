import { DatesRepository } from '../../../../../Shared/infrastructure/DatesRepository';
import { DentalinkRepository } from '../../../../../Shared/infrastructure/dentalinkRepository';
import { MongoRepository } from '../../../../../Shared/infrastructure/MongoRepository';

export default async function updatePagosSemana(repository: any): Promise<{ msg: string }> {
  console.log('Iniciando update de pagos semana con fechas:');
  const fechaInicio = new DatesRepository().lunesSemanaAnterior();
  const fechaFin = new DatesRepository().lunesEstaSemana();
  console.log('Fecha inicio:', fechaInicio);
  console.log('Fecha fin:', fechaFin);
  let response = { msg: '' };

  const newPagos = await new DentalinkRepository().updatePagos(fechaInicio, fechaFin);

  if (newPagos.length) {
    await new MongoRepository().save('Pagos', newPagos, 'id_pago_dentalink');
    response = { msg: `Se actualizaron ${newPagos.length} pagos ` };
  } else {
    response = { msg: `No se encontraron nuevos pagos ` };
  }
  console.log('response: ', response);
  return response;
}
