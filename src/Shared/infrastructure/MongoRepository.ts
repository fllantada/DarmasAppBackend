import { ModelFinder } from './MongoDb/modelFinder';
import { MongoConection } from './MongoDb/mongoConection';

export class MongoRepository {
  private conection: MongoConection;
  constructor() {
    this.conection = new MongoConection();
    this.conection.dbConnect();
  }

  private getCollection(collectionName: string) {
    return new ModelFinder().findModel(collectionName);
  }
  async save(collectionName: string, data: Array<any>, uniqueValue: string) {
    //busco la collection
    const collection = this.getCollection(collectionName);
    //recorro el array de datos
    for (let i = 0; i < data.length; i++) {
      //update es el valor a guardar y filter es el valor que se usa para buscar
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

  async find(collectionName: string, filter: {} = {}): Promise<any> {
    const collection = await this.getCollection(collectionName);

    const data = await collection.find(filter);

    return data;
  }
  async findOne(collectionName: string, filter: {} = {}): Promise<any> {
    const collection = await this.getCollection(collectionName);
    const data = await collection.findOne(filter);
    return data;
  }

  disconect() {
    this.conection.dbDisconnect();
  }
}
