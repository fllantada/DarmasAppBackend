"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Sedes = new mongoose_1.Schema({
    id_dentalink: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    direccion: String,
    citas: String,
    cajas: String
});
exports.default = (0, mongoose_1.model)('Sedes', Sedes);
