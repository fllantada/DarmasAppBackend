import mongoose from 'mongoose';
export class MongoConection {
  async dbDisconnect() {
    mongoose.connection.close();
  }

  public async dbConnect() {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
  }
}
