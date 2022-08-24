import { ModelFinder } from './MongoDb/modelFinder';
import { MongoConection } from './MongoDb/mongoConection';

export class MongoRepository {
  constructor() {
    new MongoConection().dbConnect();
  }

  private getCollection(collectionName: string) {
    return new ModelFinder().findModel(collectionName);
  }
  async save(collectionName: string, data: Array<any>, uniqueValue: string) {
    console.log('inicio save');
    const collection = this.getCollection(collectionName);

    for (let i = 0; i < data.length; i++) {
      const filter = {
        [uniqueValue]: data[i][uniqueValue]
      };
      const update = data[i];
      await collection.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true // Make this update into an upsert
      });
    }
  }

  find(id: number) {}

  findOrCreate(id: number) {}

  delete(id: number) {}

  findOne(id: number) {}

  disconect() {
    new MongoConection().dbDisconnect();
  }
}
