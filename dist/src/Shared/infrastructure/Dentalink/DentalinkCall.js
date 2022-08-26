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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DentalinkCaller = void 0;
const axios_1 = __importDefault(require("axios"));
class DentalinkCaller {
    constructor() {
        this.customAxios = axios_1.default.create({
            headers: { Authorization: 'Token ' + process.env.TOKEN_DENTALINK }
        });
        this.allData = [];
        this.allData = [];
    }
    send(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = {
                data: [],
                links: { next: url }
            };
            do {
                response = yield this.getDentalink(response.links.next);
                this.addToData(response.data);
            } while (this.isValidUrl(response.links.next));
            return this.allData;
        });
    }
    createDentalinkUrl(url, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const baseUrl = `https://api.dentalink.healthatom.com/api/v1${url}`;
            const sendString = `?q=${JSON.stringify(filter)}`;
            const finalUrl = baseUrl + sendString;
            return finalUrl;
        });
    }
    getDentalink(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.customAxios.get(url);
            return { data: data.data, links: data.links };
        });
    }
    addToData(newData) {
        this.allData = [...this.allData, ...newData];
    }
    isValidUrl(url) {
        if (typeof url !== 'string') {
            return false;
        }
        if (url.includes('https://api.dentalink.healthatom.com/api/v1')) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.DentalinkCaller = DentalinkCaller;
