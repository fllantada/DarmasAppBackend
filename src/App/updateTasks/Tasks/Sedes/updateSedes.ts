import { DentalinkRepository } from '../../../../../src/Shared/infrastructure/dentalinkRepository';
import { MongoRepository } from '../../../../../src/Shared/infrastructure/MongoRepository';

async function isActive(sede: { id_dentalink: string }): Promise<boolean> {
  const filter = {
    id_sucursal: sede.id_dentalink
  };
  const hayPagos = await new MongoRepository().findOne('Pagos', filter);
  if (hayPagos) {
    return true;
  } else {
    return false;
  }
}
export async function updateSedes(): Promise<{ msg: string }> {
  const newSedes: Array<any> = await new DentalinkRepository().updateSedes();
  let sedesAmount = 0;

  if (newSedes.length) {
    for (const sede of newSedes) {
      if (await isActive(sede)) {
        await new MongoRepository().save('Sedes', [sede], 'id_dentalink');
        sedesAmount++;
      }
    }
    const response = { msg: `Se actualizaron  sedes ${sedesAmount}` };
    return response;
  } else {
    const response = { msg: `No se encontraron nuevas sedes Activas ` };
    return response;
  }
}
