import { pagosUpdateConfig } from './Dentalink/Update/updateConfigs/pagosUpdateConfig';
import { liquidacionesUpdateConfig } from './Dentalink/Update/updateConfigs/liquidacionesUpdateConfig';
import { DentalinkUpdater } from './Dentalink/Update/DentalinkUpdater';
import { sedesUpdateConfig } from './Dentalink/Update/updateConfigs/sedesUpdateConfig';
export class DentalinkRepository {
  constructor() {}

  async updatePagos(fechaInicio: string, fechaFin: string): Promise<Array<any>> {
    //creo la configuracion para el update pasando las fechas que llegan por parametro desde la APP
    const pagosConfig = pagosUpdateConfig(fechaInicio, fechaFin);
    //creo instancia del updater con la configuracion
    const updater = new DentalinkUpdater(pagosConfig);
    //ejecuto el update
    const updatedData = await updater.update();
    //devuelvo los pagos actualizados
    return updatedData;
  }

  async updateLiquidaciones(fechaInicio: string): Promise<Array<any>> {
    const liquidacionesConfig = liquidacionesUpdateConfig(fechaInicio);
    const updater = new DentalinkUpdater(liquidacionesConfig);
    const updatedData = await updater.update();
    return updatedData;
  }
  async updateSedes(): Promise<any> {
    const sedesConfig = sedesUpdateConfig();
    const updater = new DentalinkUpdater(sedesConfig);
    const updatedData = await updater.update();
    return updatedData;
  }
}
