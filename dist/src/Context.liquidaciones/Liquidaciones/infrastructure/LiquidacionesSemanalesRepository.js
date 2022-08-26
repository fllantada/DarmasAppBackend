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
exports.LiquidacionesSemanalesRepository = void 0;
class LiquidacionesSemanalesRepository {
    constructor(mongoRepository, datesRepository) {
        this.dates = datesRepository;
        this.dataBase = mongoRepository;
        this.fechaInicio = this.dates.lunesSemanaAnterior();
        this.fechaFin = this.dates.lunesEstaSemana();
    }
    getPagosSemanales() {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = {
                fecha_recepcion: {
                    $gte: this.dates.lunesSemanaAnterior()
                },
                fecha_vencimiento: {
                    $lt: this.dates.lunesEstaSemana()
                }
            };
            const pagos = yield this.dataBase.find('Pagos', filter);
            const pagosSede = pagos.map((pago) => ({
                id_sucursal: Number(pago.id_sucursal),
                medio_pago: pago.medio_pago,
                monto: Number(pago.monto_pago)
            }));
            return pagosSede;
        });
    }
    getLiquidacionesSemanales() {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = {
                $and: [
                    { fecha_termino: { $lt: this.dates.lunesEstaSemana() } },
                    { fecha_termino: { $gte: this.dates.lunesSemanaAnterior() } }
                ]
            };
            const liquidaciones = yield this.dataBase.find('Liquidaciones', filter);
            const liquidacionesDentistas = liquidaciones.map((liquidacion) => ({
                id_sucursal: Number(liquidacion.id_sucursal),
                id_dentista: Number(liquidacion.id_dentista),
                monto: Number(liquidacion.monto),
                link_detalle: liquidacion.link_detalle
            }));
            return liquidacionesDentistas;
        });
    }
    getSedes() {
        return __awaiter(this, void 0, void 0, function* () {
            const sedes = this.dataBase.find('Sedes');
            return sedes;
        });
    }
}
exports.LiquidacionesSemanalesRepository = LiquidacionesSemanalesRepository;
