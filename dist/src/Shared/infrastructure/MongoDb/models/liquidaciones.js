"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Liquidaciones = new mongoose_1.Schema({
    id_dentalink: { type: Number, unique: true },
    id_dentista: String,
    id_sucursal: String,
    fecha_inicio: Date,
    fecha_termino: Date,
    monto: Number,
    activa: Number,
    link_detalle: String,
    fecha_carga: { type: Date, default: Date.now() }
});
exports.default = (0, mongoose_1.model)('Liquidaciones', Liquidaciones);
