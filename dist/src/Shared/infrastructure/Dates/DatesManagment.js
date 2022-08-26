"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dates = void 0;
const moment_1 = __importDefault(require("moment"));
class Dates {
    lunesEstaSemana() {
        return (0, moment_1.default)().isoWeekday('Monday').format('YYYY-MM-DD');
    }
    lunesSemanaAnterior() {
        return (0, moment_1.default)().isoWeekday('Monday').subtract(1, 'week').format('YYYY-MM-DD');
    }
    haceDosMeses() {
        return (0, moment_1.default)().subtract(2, 'month').format('YYYY-MM-DD');
    }
    haceUnMes() {
        return (0, moment_1.default)().subtract(1, 'month').format('YYYY-MM-DD');
    }
}
exports.Dates = Dates;
