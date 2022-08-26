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
exports.DentalinkUpdater = void 0;
const DentalinkCall_1 = require("../DentalinkCall");
class DentalinkUpdater extends DentalinkCall_1.DentalinkCaller {
    constructor(elementConfig) {
        super();
        this.url = elementConfig.config.url;
        this.filters = elementConfig.config.filters;
        this.maper = elementConfig.maper;
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            //create url
            const urlDentalink = yield this.createDentalinkUrl(this.url, this.filters);
            //get data
            const data = yield this.send(urlDentalink);
            //map data
            const dataMaped = this.maper(data);
            //return data
            return dataMaped;
        });
    }
}
exports.DentalinkUpdater = DentalinkUpdater;
