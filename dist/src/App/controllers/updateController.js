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
exports.UpdateController = void 0;
const UpdateProcess_1 = require("../../Context.update/aplication/UpdateProcess");
const dentalinkRepository_1 = require("../../Shared/infrastructure/dentalinkRepository");
const MongoRepository_1 = require("../../Shared/infrastructure/MongoRepository");
const DatesRepository_1 = require("../../Shared/infrastructure/DatesRepository");
class UpdateController {
    constructor() { }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new UpdateProcess_1.UpdateProcess(new dentalinkRepository_1.DentalinkRepository(), new MongoRepository_1.MongoRepository(), new DatesRepository_1.DatesRepository()).run();
            res.send('Ejecutando actualizaciones');
        });
    }
}
exports.UpdateController = UpdateController;
