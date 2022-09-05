import { json, urlencoded } from 'body-parser';
import compress from 'compression';
import errorHandler from 'errorhandler';
import express, { Request, Response } from 'express';
import Router from 'express-promise-router';
import helmet from 'helmet';
import * as http from 'http';
import httpStatus from 'http-status';
import { RouteRegister } from './routeRegister';

export class Server {
  private express: express.Express;
  private port: string;
  private httpServer?: http.Server;
  private who?: string;
  private dirname?: string;

  constructor(port: string, who?: string, dirname?: string) {
    this.port = port;
    this.who = who || 'SomeOne';
    this.dirname = dirname || './';
    this.express = express();
    this.express.use(json());
    this.express.use(urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));
    this.express.use(compress());
    const router = Router();
    router.use(errorHandler());
    this.express.use(router);
    const routeRegister = new RouteRegister(router, this.dirname);
    routeRegister.findRoutes();
    console.log('Registre rutas');

    router.use((err: Error, req: Request, res: Response, next: () => void) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(` ${this.who} is running at http://localhost:${this.port} in ${this.express.get('env')} mode`);

        resolve();
      });
    });
  }

  getHTTPServer() {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}
