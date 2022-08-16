import { Server } from '../shared/server';

export class LiquidacionesApp {
  server?: Server;

  async start() {
    const port = process.env.PORT || '5000';
    this.server = new Server(port, 'Liquidaciones', __dirname + '/routes/*.route.*');

    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }
}
