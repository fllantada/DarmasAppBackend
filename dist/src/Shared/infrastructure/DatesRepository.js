"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatesRepository = void 0;
const moment_1 = __importDefault(require("moment"));
const DatesManagment_1 = require("./Dates/DatesManagment");
class DatesRepository extends DatesManagment_1.Dates {
    constructor() {
        super();
    }
    lunesEstaSemana() {
        return (0, moment_1.default)().isoWeekday('Monday').format('YYYY-MM-DD');
    }
    lunesSemanaAnterior() {
        return (0, moment_1.default)().isoWeekday('Monday').subtract(1, 'week').format('YYYY-MM-DD');
    }
}
exports.DatesRepository = DatesRepository;
