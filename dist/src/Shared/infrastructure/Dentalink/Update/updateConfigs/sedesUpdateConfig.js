"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedesUpdateConfig = void 0;
const sedesUpdateConfig = () => ({
    config: {
        url: '/sucursales',
        filters: {
            habilitada: { eq: 1 }
        }
    },
    maper: (sedes) => {
        const sedesMapeadas = sedes.map((sede) => ({
            id_dentalink: sede.id,
            name: sede.nombre,
            direccion: sede.direccion,
            citas: sede.links[2].href,
            cajas: sede.links[1].href
        }));
        return sedesMapeadas;
    }
});
exports.sedesUpdateConfig = sedesUpdateConfig;
