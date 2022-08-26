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
exports.ResumenLiquidacionesGetController = void 0;
const LiquidacionesSemanales_1 = require("../../Context.liquidaciones/Liquidaciones/aplication/LiquidacionesSemanales");
const LiquidacionesSemanalesRepository_1 = require("../../Context.liquidaciones/Liquidaciones/infrastructure/LiquidacionesSemanalesRepository");
const DatesRepository_1 = require("../../Shared/infrastructure/DatesRepository");
const MongoRepository_1 = require("../../Shared/infrastructure/MongoRepository");
class ResumenLiquidacionesGetController {
    constructor() { }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = new LiquidacionesSemanalesRepository_1.LiquidacionesSemanalesRepository(new MongoRepository_1.MongoRepository(), new DatesRepository_1.DatesRepository());
            const liquidaciones = yield new LiquidacionesSemanales_1.LiquidacionesSemanales(repository).run();
            res.send(liquidaciones);
        });
    }
}
exports.ResumenLiquidacionesGetController = ResumenLiquidacionesGetController;
