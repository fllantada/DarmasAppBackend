import { updateConfig } from './updateConfigInterface';

export const pagosUpdateConfig = (fecha_recepcion: string, fecha_vencimiento: string): updateConfig => {
  return {
    config: {
      url: '/pagos',
      filters: {
        fecha_recepcion: { gte: fecha_recepcion },
        fecha_vencimiento: { lte: fecha_vencimiento }
      }
    },
    maper: (pagos: Array<any>) => {
      let pagosMapeados = pagos.map(pago => {
        return {
          id_pago_dentalink: pago.id,
          id_paciente: pago.id_paciente,
          id_medio_pago: pago.id_medio_pago,
          id_sucursal: pago.id_sucursal,
          nombre_paciente: pago.nombre_paciente,
          monto_pago: pago.monto_pago,
          medio_pago: pago.medio_pago,
          fecha_recepcion: pago.fecha_recepcion,
          fecha_vencimiento: pago.fecha_vencimiento,
          nombre_sucursal: pago.nombre_sucursal
        };
      });

      return pagosMapeados;
    }
  };
};
