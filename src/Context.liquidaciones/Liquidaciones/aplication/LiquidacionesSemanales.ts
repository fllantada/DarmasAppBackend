import { Liquidacion } from '../domain/Liquidacion';

export class LiquidacionesSemanales {
  private repository: any;

  constructor(repository: any) {
    this.repository = repository;
  }

  async run(): Promise<Array<Liquidacion>> {
    console.log('Inicio aplicacion y llamo a pagos');
    const pagos = await this.repository.getPagosSemanales();
    const sedes = await this.repository.getSedes();
    const liquidaciones = await this.repository.getLiquidacionesSemanales();
    console.log('tengo datos -Pagos:', pagos.length, 'sedes:', sedes.length, 'liquidaciones:', liquidaciones.length);
    const pagosPorSucursal = this.asignarPagos(pagos, sedes);

    const liquidacionesPorSucursal = this.agruparLiquidaciones(liquidaciones, sedes);

    const resumenLiquidaciones = this.crearLiquidaciones(pagosPorSucursal, liquidacionesPorSucursal);

    console.log(resumenLiquidaciones);
    return resumenLiquidaciones;
  }
  private asignarPagos(pagos: Array<any>, sedes: Array<any>): Array<any> {
    return [];
  }
  private agruparLiquidaciones(liquidaciones: Array<any>, sedes: Array<any>): Array<any> {
    //si tengo 2 dentistas que estan en la misma sede los agrupa a una sola liquidacion sumando los montos

    console.log('las liquidaciones sin agrupar son:', liquidaciones.length);

    const liquidacionesAgrupadas = liquidaciones.reduce(
      (liqAgrupadas: any, liquidacion: any, index: number, Liquidaciones: Array<any>) => {
        console.log('ejecutando el reduce en la liq:', liquidacion.id_sucursal);

        //encuentro la sede correspondiente a la liquidacion
        const finded = liqAgrupadas.find((liq: any) => liq.id_sucursal == liquidacion.id_sucursal);

        if (!finded) {
          let nombreSede = sedes.find(sede => sede.id_dentalink == liquidacion.id_sucursal).name;

          liqAgrupadas.push({ ...liquidacion._doc, nombre_sucursal: nombreSede });
        } else {
          console.log('Encontre duplicado lo agrupo', 'finded es:', finded, 'liquidacion actual es:', liquidacion);
          finded.monto += liquidacion.monto;
          finded.id_dentista = finded.id_dentista + ',' + liquidacion.id_dentista;
          finded.id_dentalink = finded.id_dentalink + ',' + liquidacion.id_dentalink;
          console.log('Ahora queda la liquidacion en:', finded);
        }

        return liqAgrupadas;
      },
      []
    );

    console.log(liquidacionesAgrupadas);

    return [];
  }
  crearLiquidaciones(pagosPorSucursal: Array<any>, liquidacionesPorSucursal: Array<any>): Array<any> {
    return [];
  }
}
