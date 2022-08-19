import mongoose from 'mongoose';
export class MongoConection {
  async dbDisconnect() {
    console.log('Cerrando conexion MOngo');
    mongoose.connection.close();
  }

  public async dbConnect() {
    await mongoose.connect(`${process.env.MONGODB_URI}`).then(() => {
      console.log('Conectado a MongoDB');
    });
  }
}
