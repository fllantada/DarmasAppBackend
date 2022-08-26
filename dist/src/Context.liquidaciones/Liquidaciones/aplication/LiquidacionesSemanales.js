"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidacionesSemanales = void 0;
const LiquidacionSemanalSedeCreator_1 = require("../domain/LiquidacionSemanalSedeCreator");
class LiquidacionesSemanales {
    constructor(repository) {
        this.liquidacionesTerminadas = [];
        this.repository = repository;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            //traigo pagos sedes y liquidaciones de la BD
            const pagos = yield this.repository.getPagosSemanales();
            const sedes = yield this.repository.getSedes();
            const liquidaciones = yield this.repository.getLiquidacionesSemanales();
            //por cada sede creo un creador de liquidaciones
            const liquidacionesSedes = sedes.map((sede) => new LiquidacionSemanalSedeCreator_1.LiquidacionSemanalSedeCreator(sede.name, sede.id_dentalink, this.repository.fechaInicio, this.repository.fechaFin));
            //recorro pagos y los voy agregando a las liquidaciones de la sede correspondiente
            pagos.forEach((pago) => {
                //a que sede pertenece?
                const idSucursal = pago.id_sucursal;
                //filtro
                const liquidacionSede = liquidacionesSedes.filter((liq) => liq.idSucursal === idSucursal)[0];
                //agrego el pago
                liquidacionSede.agregarPago(pago);
            });
            //recorro liquidaciones y las voy agregando a las liquidaciones de la sede correspondiente
            liquidaciones.forEach((liquidacion) => {
                const idSucursal = liquidacion.id_sucursal;
                const liquidacionSede = liquidacionesSedes.filter((liq) => liq.idSucursal === idSucursal)[0];
                liquidacionSede.agregarLiquidacion(liquidacion);
            });
            liquidacionesSedes.forEach((liquidacionTerminada) => {
                const liq = liquidacionTerminada.getResumenLiquidacion();
                this.liquidacionesTerminadas.push(liq);
            });
            return this.liquidacionesTerminadas;
        });
    }
}
exports.LiquidacionesSemanales = LiquidacionesSemanales;
