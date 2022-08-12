import { Server } from './server';

export class MoocBackendApp {
  server?: Server;

  async start() {
    console.log('--->Iniciando mookBackendApp ');
    console.log('------------------------');
    const port = process.env.PORT || '5000';
    this.server = new Server(port);
    console.log('------------------------');
    console.log('--->Aca ya se creo un nuevo servidor en el puerto del contexto Mooc');
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }
}
