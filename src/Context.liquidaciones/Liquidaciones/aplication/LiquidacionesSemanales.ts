import { LiquidacionSemanalSedeCreator } from '../domain/LiquidacionSemanalSedeCreator';
import { LiquidacionDentista } from '../domain/valueObjects/LiquidacionDentista';
import { PagoSede } from '../domain/valueObjects/PagoSede';

export class LiquidacionesSemanales {
  private repository: any;

  constructor(repository: any) {
    this.repository = repository;
  }

  async run(): Promise<any> {
    //traigo pagos sedes y liquidaciones de la BD
    const pagos: Array<PagoSede> = await this.repository.getPagosSemanales();
    const sedes = await this.repository.getSedes();
    const liquidaciones = await this.repository.getLiquidacionesSemanales();
    //por cada sede creo un creador de liquidaciones
    const liquidacionesSedes = sedes.map((sede: any) => {
      return new LiquidacionSemanalSedeCreator(
        sede.name,
        sede.id_dentalink,
        this.repository.fechaInicio,
        this.repository.fechaFin
      );
    });

    //recorro pagos
    pagos.forEach((pago: PagoSede) => {
      const idSucursal = pago.id_sucursal;
      const liquidacionSede: LiquidacionSemanalSedeCreator = liquidacionesSedes.filter(
        (liquidacion: LiquidacionSemanalSedeCreator) => {
          return liquidacion.id_sucursal == idSucursal;
        }
      )[0];
      liquidacionSede.agregarPago(pago);
    });

    //recorro liquidaciones
    liquidaciones.forEach((liquidacion: LiquidacionDentista) => {
      const idSucursal = liquidacion.id_sucursal;
      const liquidacionSede: LiquidacionSemanalSedeCreator = liquidacionesSedes.filter(
        (liquidacion: LiquidacionSemanalSedeCreator) => {
          return liquidacion.id_sucursal == idSucursal;
        }
      )[0];
      liquidacionSede.agregarLiquidacion(liquidacion);
    });

    liquidacionesSedes.forEach((liquidacionTerminada: LiquidacionSemanalSedeCreator) => {
      const liq = liquidacionTerminada.getResumenLiquidacion();
      console.log(liq);
    });
    // console.log(pagos[0], liquidaciones[0], liquidacionesSedes);

    //agrupo liquidaciones de misma sucursal

    // const liquidacionesAgrupadas = this.agruparLiquidaciones(liquidaciones, sedes);
    // //separo los pagos por Sede
    // const pagosPorSucursal = this.asignarPagos(pagos, sedes);

    // console.log(pagosPorSucursal);

    // const resumenLiquidaciones = this.crearLiquidaciones(pagosPorSucursal, liquidacionesAgrupadas);

    // //console.log(resumenLiquidaciones);

    // return resumenLiquidaciones;
  }

  asignarPagos(pagos: Array<any>, sedes: Array<any>): Array<any> {
    const pagosPorSucursal: any = [];

    for (let i = 0; i < pagos.length; i++) {
      const sucursal = pagosPorSucursal.find((e: any) => e.nombre_sucursal == pagos[i].nombre_sucursal);

      if (sucursal) {
        if (sucursal.hasOwnProperty(pagos[i].medio_pago)) {
          sucursal[pagos[i].medio_pago] = sucursal[pagos[i].medio_pago] + pagos[i].monto_pago;
        } else {
          sucursal[pagos[i].medio_pago] = pagos[i].monto_pago;
        }
      }
      if (!sucursal) {
        pagosPorSucursal.push({
          nombre_sucursal: pagos[i].nombre_sucursal,
          [pagos[i].medio_pago]: pagos[i].monto_pago,
          id_sucursal: pagos[i].id_sucursal
        });
      }
    }
    pagosPorSucursal.sort((a: any, b: any) => a.nombre_sucursal.localeCompare(b.nombre_sucursal));
    return pagosPorSucursal;
  }
  agruparLiquidaciones(liquidaciones: Array<any>, sedes: Array<any>): Array<any> {
    //si tengo 2 dentistas que estan en la misma sede los agrupa a una sola liquidacion sumando los montos

    const liquidacionesAgrupadas = liquidaciones.reduce((liqAgrupadas: any, liquidacion: any) => {
      const finded = liqAgrupadas.find((liq: any) => liq.id_sucursal == liquidacion.id_sucursal);
      let nombreSede = sedes.find(sede => sede.id_dentalink == liquidacion.id_sucursal).name;

      if (!finded) {
        liqAgrupadas.push({ ...liquidacion._doc, nombre_sucursal: nombreSede });
      } else {
        finded.monto += liquidacion.monto;
        finded.id_dentista = finded.id_dentista + ',' + liquidacion.id_dentista;
        finded.id_dentalink = finded.id_dentalink + ',' + liquidacion.id_dentalink;
      }

      return liqAgrupadas;
    }, []);

    return liquidacionesAgrupadas;
  }
  crearLiquidaciones(pagosPorSucursal: Array<any>, liquidacionesPorSucursal: Array<any>): Array<any> {
    pagosPorSucursal.forEach((e: any) => {
      for (let i = 0; i < liquidacionesPorSucursal.length; i++) {
        if (e.id_sucursal === liquidacionesPorSucursal[i].id_sucursal) {
          if (e.hasOwnProperty('liquidacion')) {
            e.liquidacion = e.liquidacion + liquidacionesPorSucursal[i].monto;
          } else {
            e.liquidacion = liquidacionesPorSucursal[i].monto;
            e.link = `${process.env.BASE_URL}/api/detalleliquidaciones/${liquidacionesPorSucursal[i].id_dentalink}`;
          }
        }
      }
    });

    return pagosPorSucursal;
  }
}
