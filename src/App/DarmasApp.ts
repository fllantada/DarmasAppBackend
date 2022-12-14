import { Server } from './shared/server';

export class DarmasApp {
  server?: Server;

  async start() {
    console.log('Inicie start');
    const port = process.env.PORT || '4000';
    this.server = new Server(port, 'DarmasApp', __dirname + '/routes/*.route.*');

    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }
}
