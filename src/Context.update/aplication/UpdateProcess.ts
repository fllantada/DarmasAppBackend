export class UpdateProcess {
  private dentalink: any;
  private mongoDb: any;
  private dates: any;

  constructor(dentalinkRepository: any, persistRepository: any, datesRepository: any) {
    this.dentalink = dentalinkRepository;
    this.mongoDb = persistRepository;
    this.dates = datesRepository;
  }

  async run(): Promise<void> {
    const pagosResponse = await this.updatePagos();
    console.log(pagosResponse.msg);
    const liquidacionesResponse = await this.updateLiquidaciones();
    console.log(liquidacionesResponse.msg);
    const sedesResponse = await this.updateSedes();
    console.log(sedesResponse.msg);
  }
  async isActive(sede: { id_dentalink: string }): Promise<boolean> {
    const filter = {
      id_sucursal: sede.id_dentalink
    };
    const hayPagos = await this.mongoDb.findOne('Pagos', filter);
    if (hayPagos) {
      return true;
    } else {
      return false;
    }
  }
  async updateSedes(): Promise<{ msg: string }> {
    const newSedes: Array<any> = await this.dentalink.updateSedes();
    const activeSedes = [];

    if (newSedes.length) {
      for (let i = 0; i < newSedes.length; i++) {
        if (await this.isActive(newSedes[i])) {
          await this.mongoDb.save('Sedes', [newSedes[i]], 'id_dentalink');
          activeSedes.push(newSedes[i]);
        }
      }
      const response = { msg: `Se actualizaron  sedes ${activeSedes.length}` };
      return response;
    } else {
      const response = { msg: `No se encontraron nuevas sedes Activas ` };
      return response;
    }
  }

  async updatePagos(): Promise<{ msg: string }> {
    const fechaInicio = this.dates.lunesSemanaAnterior();
    const fechaFin = this.dates.lunesEstaSemana();

    const newPagos = await this.dentalink.updatePagos(fechaInicio, fechaFin);

    if (newPagos.length) {
      await this.mongoDb.save('Pagos', newPagos, 'id_pago_dentalink');
      const response = { msg: `Se actualizaron ${newPagos.length} pagos ` };
      return response;
    } else {
      const response = { msg: `No se encontraron nuevos pagos ` };
      return response;
    }
  }
  async updateLiquidaciones(): Promise<{ msg: string }> {
    const fechaInicio = this.dates.haceUnMes();
    const newLiquidaciones: Array<any> = await this.dentalink.updateLiquidaciones(fechaInicio);

    if (newLiquidaciones.length) {
      await this.mongoDb.save('Liquidaciones', newLiquidaciones, 'id_dentalink');
      const response = { msg: `Se actualizaron ${newLiquidaciones.length} liquidaciones ` };
      return response;
    } else {
      const response = { msg: `No se encontraron nuevas liquidaciones ` };
      return response;
    }
  }
}
