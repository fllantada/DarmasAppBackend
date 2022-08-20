import mongoose from 'mongoose';
export class MongoConection {
  async dbDisconnect() {
    console.log('Cerrando conexion MOngo');
    mongoose.connection.close();
  }

  public async dbConnect() {
    const client = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log('Cliente es:', client.models);
  }
}
