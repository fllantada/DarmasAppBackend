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
exports.MongoRepository = void 0;
const modelFinder_1 = require("./MongoDb/modelFinder");
const mongoConection_1 = require("./MongoDb/mongoConection");
class MongoRepository {
    constructor() {
        this.conection = new mongoConection_1.MongoConection();
        this.conection.dbConnect();
    }
    getCollection(collectionName) {
        return new modelFinder_1.ModelFinder().findModel(collectionName);
    }
    save(collectionName, data, uniqueValue) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('inicio save');
            //busco la collection
            const collection = this.getCollection(collectionName);
            //recorro el array de datos
            for (let i = 0; i < data.length; i++) {
                //update es el valor a guardar y filter es el valor que se usa para buscar
                const filter = {
                    [uniqueValue]: data[i][uniqueValue]
                };
                const update = data[i];
                yield collection.findOneAndUpdate(filter, update, {
                    new: true,
                    upsert: true // Make this update into an upsert
                });
            }
        });
    }
    find(collectionName, filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Entre a metodo find con filter en:', filter);
            const collection = yield this.getCollection(collectionName);
            const data = yield collection.find(filter);
            return data;
        });
    }
    findOne(collectionName, filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield this.getCollection(collectionName);
            const data = yield collection.findOne(filter);
            return data;
        });
    }
    disconect() {
        this.conection.dbDisconnect();
    }
}
exports.MongoRepository = MongoRepository;
