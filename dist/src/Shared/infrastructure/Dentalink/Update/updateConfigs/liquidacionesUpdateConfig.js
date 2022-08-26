"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liquidacionesUpdateConfig = void 0;
const liquidacionesUpdateConfig = (fechaInicio) => ({
    config: {
        url: '/liquidaciones',
        filters: {
            fecha_inicio: { gte: fechaInicio }
        }
    },
    maper: (liquidaciones) => {
        const liquidacionesMapeadas = liquidaciones.map((liquidacion) => ({
            id_dentalink: liquidacion.id,
            id_dentista: liquidacion.id_dentista,
            id_sucursal: liquidacion.id_sucursal,
            fecha_inicio: liquidacion.fecha_inicio,
            fecha_termino: liquidacion.fecha_termino,
            monto: liquidacion.monto,
            activa: liquidacion.activa,
            /*eslint-disable */
            link_detalle: liquidacion.links.map((e) => {
                if (e.rel === 'detalles') {
                    return e.href;
                }
                else {
                    return undefined;
                }
            })[1]
        }));
        /*eslint-enable */
        return liquidacionesMapeadas;
    }
});
exports.liquidacionesUpdateConfig = liquidacionesUpdateConfig;
