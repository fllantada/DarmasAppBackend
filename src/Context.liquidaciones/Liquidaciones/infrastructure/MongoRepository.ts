import { ModelFinder } from './MongoDb/modelFinder';
import { MongoConection } from './MongoDb/mongoConection';

export class MongoRepository {
  constructor() {
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
