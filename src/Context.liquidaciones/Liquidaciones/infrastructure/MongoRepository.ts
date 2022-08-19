import { ModelFinder } from './MongoDb/modelFinder';
import { MongoConection } from './MongoDb/mongoConection';

export class MongoRepository {
  constructor() {
    console.log('inicie el constructor de mongoRepository');
    new MongoConection().dbConnect();
  }

  getCollection(collectionName: string) {
    return new ModelFinder().findModel(collectionName);
  }
  save(object: object) {}

  find(id: number) {}

  findOrCreate(id: number) {}

  delete(id: number) {}

  findOne(id: number) {}

  disconect() {
    new MongoConection().dbDisconnect();
  }
}
