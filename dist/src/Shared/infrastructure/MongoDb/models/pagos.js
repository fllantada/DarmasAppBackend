"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Pagos = new mongoose_1.Schema({
    id_pago_dentalink: { type: Number, unique: true },
    id_paciente: String,
    id_medio_pago: String,
    id_sucursal: String,
    nombre_paciente: String,
    monto_pago: Number,
    medio_pago: String,
    fecha_recepcion: Date,
    fecha_vencimiento: Date,
    nombre_sucursal: String,
    fecha_carga: { type: Date, default: Date.now() }
});
exports.default = (0, mongoose_1.model)('Pagos', Pagos);
