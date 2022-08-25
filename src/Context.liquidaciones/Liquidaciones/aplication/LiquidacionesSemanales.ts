import { LiquidacionSemanalSedeCreator } from '../domain/LiquidacionSemanalSedeCreator';
import { LiquidacionDentista } from '../domain/valueObjects/LiquidacionDentista';
import { PagoSede } from '../domain/valueObjects/PagoSede';

export class LiquidacionesSemanales {
  private repository: any;
  private liquidacionesTerminadas: Array<any> = [];

  constructor(repository: any) {
    this.repository = repository;
  }

  async run(): Promise<any> {
    //traigo pagos sedes y liquidaciones de la BD
    const pagos: Array<PagoSede> = await this.repository.getPagosSemanales();
    const sedes = await this.repository.getSedes();
    const liquidaciones = await this.repository.getLiquidacionesSemanales();
    //por cada sede creo un creador de liquidaciones
    const liquidacionesSedes = sedes.map(
      (sede: any) =>
        new LiquidacionSemanalSedeCreator(
          sede.name,
          sede.id_dentalink,
          this.repository.fechaInicio,
          this.repository.fechaFin
        )
    );

    //recorro pagos y los voy agregando a las liquidaciones de la sede correspondiente
    pagos.forEach((pago: PagoSede) => {
      const idSucursal = pago.id_sucursal;
      const liquidacionSede: LiquidacionSemanalSedeCreator = liquidacionesSedes.filter(
        (liq: LiquidacionSemanalSedeCreator) => liq.id_sucursal === idSucursal
      )[0];
      liquidacionSede.agregarPago(pago);
    });

    //recorro liquidaciones y las voy agregando a las liquidaciones de la sede correspondiente
    liquidaciones.forEach((liquidacion: LiquidacionDentista) => {
      const idSucursal = liquidacion.id_sucursal;
      const liquidacionSede: LiquidacionSemanalSedeCreator = liquidacionesSedes.filter(
        (liq: LiquidacionSemanalSedeCreator) => liq.id_sucursal === idSucursal
      )[0];
      liquidacionSede.agregarLiquidacion(liquidacion);
    });

    liquidacionesSedes.forEach((liquidacionTerminada: LiquidacionSemanalSedeCreator) => {
      const liq = liquidacionTerminada.getResumenLiquidacion();
      this.liquidacionesTerminadas.push(liq);
    });
    return this.liquidacionesTerminadas;
  }
}
