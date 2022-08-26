"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DarmasApp_1 = require("./DarmasApp");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Unica funcion iniciar la aplicacion Sedes que nos da una ruta para obtener todas las sedes
try {
    new DarmasApp_1.DarmasApp().start();
}
catch (e) {
    process.exit(1);
}
process.on('uncaughtException', err => {
    process.exit(1);
});
