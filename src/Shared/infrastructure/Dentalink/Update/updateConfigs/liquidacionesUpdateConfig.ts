import { updateConfig } from './updateConfigInterface';

export const liquidacionesUpdateConfig = (fechaInicio: string): updateConfig => ({
  config: {
    url: '/liquidaciones',
    filters: {
      fecha_inicio: { gte: fechaInicio }
    }
  },
  maper: (liquidaciones: Array<object>) => {
    const liquidacionesMapeadas = liquidaciones.map((liquidacion: any) => {
      return {
        id_dentalink: liquidacion.id,
        id_dentista: liquidacion.id_dentista,
        id_sucursal: liquidacion.id_sucursal,
        fecha_inicio: liquidacion.fecha_inicio,
        fecha_termino: liquidacion.fecha_termino,
        monto: liquidacion.monto,
        activa: liquidacion.activa,
        link_detalle: liquidacion.links.map((e: any) => {
          if (e.rel === 'detalles') {
            return e.href;
          }
        })[1]
      };
    });

    return liquidacionesMapeadas;
  }
});
