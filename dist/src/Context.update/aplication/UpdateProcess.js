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
exports.UpdateProcess = void 0;
class UpdateProcess {
    constructor(dentalinkRepository, persistRepository, datesRepository) {
        this.dentalink = dentalinkRepository;
        this.mongoDb = persistRepository;
        this.dates = datesRepository;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const pagosResponse = yield this.updatePagos();
            console.log(pagosResponse.msg);
            const liquidacionesResponse = yield this.updateLiquidaciones();
            console.log(liquidacionesResponse.msg);
            const sedesResponse = yield this.updateSedes();
            console.log(sedesResponse.msg);
            console.log('termine el proceso');
        });
    }
    isActive(sede) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = {
                id_sucursal: sede.id_dentalink
            };
            const hayPagos = yield this.mongoDb.findOne('Pagos', filter);
            if (hayPagos) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    updateSedes() {
        return __awaiter(this, void 0, void 0, function* () {
            const newSedes = yield this.dentalink.updateSedes();
            const activeSedes = [];
            if (newSedes.length) {
                for (let i = 0; i < newSedes.length; i++) {
                    if (yield this.isActive(newSedes[i])) {
                        yield this.mongoDb.save('Sedes', [newSedes[i]], 'id_dentalink');
                        activeSedes.push(newSedes[i]);
                    }
                }
                const response = { msg: `Se actualizaron  sedes ${activeSedes.length}` };
                return response;
            }
            else {
                const response = { msg: `No se encontraron nuevas sedes Activas ` };
                return response;
            }
        });
    }
    updatePagos() {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaInicio = this.dates.lunesSemanaAnterior();
            const fechaFin = this.dates.lunesEstaSemana();
            const newPagos = yield this.dentalink.updatePagos(fechaInicio, fechaFin);
            if (newPagos.length) {
                yield this.mongoDb.save('Pagos', newPagos, 'id_pago_dentalink');
                const response = { msg: `Se actualizaron ${newPagos.length} pagos ` };
                return response;
            }
            else {
                const response = { msg: `No se encontraron nuevos pagos ` };
                return response;
            }
        });
    }
    updateLiquidaciones() {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaInicio = this.dates.haceUnMes();
            const newLiquidaciones = yield this.dentalink.updateLiquidaciones(fechaInicio);
            if (newLiquidaciones.length) {
                yield this.mongoDb.save('Liquidaciones', newLiquidaciones, 'id_dentalink');
                const response = { msg: `Se actualizaron ${newLiquidaciones.length} liquidaciones ` };
                return response;
            }
            else {
                const response = { msg: `No se encontraron nuevas liquidaciones ` };
                return response;
            }
        });
    }
}
exports.UpdateProcess = UpdateProcess;
