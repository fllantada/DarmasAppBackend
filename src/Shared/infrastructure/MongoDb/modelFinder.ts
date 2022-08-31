import glob from 'glob';

export class ModelFinder {
  findModel(collectionName: string): any {
    console.log('Inicio find model');
    //busco un archivo que este en la carpeta models y que tenga el nombre de la coleccion

    const modelsPaths: string[] = glob.sync(`${__dirname}/models/${collectionName.toLowerCase()}.{ts,js}`);
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
