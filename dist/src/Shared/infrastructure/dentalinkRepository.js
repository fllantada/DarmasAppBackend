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
exports.DentalinkRepository = void 0;
const pagosUpdateConfig_1 = require("./Dentalink/Update/updateConfigs/pagosUpdateConfig");
const liquidacionesUpdateConfig_1 = require("./Dentalink/Update/updateConfigs/liquidacionesUpdateConfig");
const DentalinkUpdater_1 = require("./Dentalink/Update/DentalinkUpdater");
const sedesUpdateConfig_1 = require("./Dentalink/Update/updateConfigs/sedesUpdateConfig");
class DentalinkRepository {
    constructor() { }
    updatePagos(fechaInicio, fechaFin) {
        return __awaiter(this, void 0, void 0, function* () {
            //creo la configuracion para el update pasando las fechas que llegan por parametro desde la APP
            const pagosConfig = (0, pagosUpdateConfig_1.pagosUpdateConfig)(fechaInicio, fechaFin);
            //creo instancia del updater con la configuracion
            const updater = new DentalinkUpdater_1.DentalinkUpdater(pagosConfig);
            //ejecuto el update
            const updatedData = yield updater.update();
            //devuelvo los pagos actualizados
            return updatedData;
        });
    }
    updateLiquidaciones(fechaInicio) {
        return __awaiter(this, void 0, void 0, function* () {
            const liquidacionesConfig = (0, liquidacionesUpdateConfig_1.liquidacionesUpdateConfig)(fechaInicio);
            const updater = new DentalinkUpdater_1.DentalinkUpdater(liquidacionesConfig);
            const updatedData = yield updater.update();
            return updatedData;
        });
    }
    updateSedes() {
        return __awaiter(this, void 0, void 0, function* () {
            const sedesConfig = (0, sedesUpdateConfig_1.sedesUpdateConfig)();
            const updater = new DentalinkUpdater_1.DentalinkUpdater(sedesConfig);
            const updatedData = yield updater.update();
            return updatedData;
        });
    }
}
exports.DentalinkRepository = DentalinkRepository;
