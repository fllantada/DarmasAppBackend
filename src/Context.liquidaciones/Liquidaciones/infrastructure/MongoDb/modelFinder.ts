import { model } from 'mongoose';
import glob from 'glob';

export class ModelFinder {
  findModel(collectionName: string): typeof model {
    console.log('Entre en find Models');

    const modelsPaths: string[] = glob.sync(`${__dirname}/models/${collectionName}.ts`);
    const modelFinded = require(modelsPaths[0]);

    return modelFinded;
  }
}
