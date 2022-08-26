"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagosUpdateConfig = void 0;
const pagosUpdateConfig = (fechaRecepcion, fechaVencimiento) => ({
    config: {
        url: '/pagos',
        filters: {
            fecha_recepcion: { gte: fechaRecepcion },
            fecha_vencimiento: { lte: fechaVencimiento }
        }
    },
    maper: (pagos) => {
        const pagosMapeados = pagos.map(pago => ({
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
        }));
        return pagosMapeados;
    }
});
exports.pagosUpdateConfig = pagosUpdateConfig;
