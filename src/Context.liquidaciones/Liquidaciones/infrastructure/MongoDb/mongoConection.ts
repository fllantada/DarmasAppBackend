import mongoose from 'mongoose';
export class MongoConection {
  async dbDisconnect() {
    mongoose.connection.close();
  }

  public async dbConnect() {
    console.log('Inicie la class MongoConection');

    await mongoose.connect(`${process.env.MONGODB_URL}`).then(() => {
      console.log('Conectado a MongoDB');
    });

    // return db;
  }
}
