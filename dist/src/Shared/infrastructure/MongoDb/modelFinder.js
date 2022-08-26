"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelFinder = void 0;
const glob_1 = __importDefault(require("glob"));
class ModelFinder {
    findModel(collectionName) {
        console.log('Inicio find model');
        //busco un archivo que este en la carpeta models y que tenga el nombre de la coleccion
        const modelsPaths = glob_1.default.sync(`${__dirname}/models/${collectionName}.ts`);
        console.log('modelsPaths:', modelsPaths);
        //arrojo error si no encuentro el modelo
        if (!modelsPaths.length) {
            throw new Error(`No se encontro el modelo ${collectionName}: Crea el modelo en la carpeta models`);
        }
        //lo importo al modelo
        const modelFinded = require(modelsPaths[0]).default;
        //retorno el modelo
        return modelFinded;
    }
}
exports.ModelFinder = ModelFinder;
