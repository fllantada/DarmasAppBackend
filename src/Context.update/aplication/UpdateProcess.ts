import { ActionType } from '../domain/valueobjects/ActionType';
export class UpdateProcess {
  private repository: any;
  private task: any;
  actionType: ActionType;

  constructor(repository: any, task: any, actionType: ActionType) {
    this.repository = repository;
    this.task = task;
    this.actionType = actionType;
  }
  //administrar tareas de actualizacion
  // task
  // taskManager
  // accion a realizar
  // administrador de tareas programadas intervalos

  async run(): Promise<void> {
    console.log(this.repository, this.task, this.actionType);

    /* const pagosResponse = await this.updatePagos();
    console.log(pagosResponse.msg);
    const liquidacionesResponse = await this.updateLiquidaciones();
    console.log(liquidacionesResponse.msg);
    const sedesResponse = await this.updateSedes();
    console.log(sedesResponse.msg); */
  }
}

/* async isActive(sede: { id_dentalink: string }): Promise<boolean> {
    const filter = {
      id_sucursal: sede.id_dentalink
    };
    const hayPagos = await this.repository.mongoDb.findOne('Pagos', filter);
    if (hayPagos) {
      return true;
    } else {
      return false;
    }
  }
  async updateSedes(): Promise<{ msg: string }> {
    const newSedes: Array<any> = await this.repository.dentalink.updateSedes();
    let sedesAmount = 0;

    if (newSedes.length) {
      for (const sede of newSedes) {
        if (await this.isActive(sede)) {
          await this.repository.mongoDb.save('Sedes', [sede], 'id_dentalink');
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

  async updatePagos(): Promise<{ msg: string }> {
    const fechaInicio = this.repository.dates.lunesSemanaAnterior();
    const fechaFin = this.repository.dates.lunesEstaSemana();

    const newPagos = await this.repository.dentalink.updatePagos(fechaInicio, fechaFin);

    if (newPagos.length) {
      await this.repository.mongoDb.save('Pagos', newPagos, 'id_pago_dentalink');
      const response = { msg: `Se actualizaron ${newPagos.length} pagos ` };
      return response;
    } else {
      const response = { msg: `No se encontraron nuevos pagos ` };
      return response;
    }
  }
  async updateLiquidaciones(): Promise<{ msg: string }> {
    const fechaInicio = this.repository.dates.haceUnMes();
    const newLiquidaciones: Array<any> = await this.repository.dentalink.updateLiquidaciones(fechaInicio);

    if (newLiquidaciones.length) {
      await this.repository.mongoDb.save('Liquidaciones', newLiquidaciones, 'id_dentalink');
      const response = { msg: `Se actualizaron ${newLiquidaciones.length} liquidaciones ` };
      return response;
    } else {
      const response = { msg: `No se encontraron nuevas liquidaciones ` };
      return response;
    }
  }
}
 */
