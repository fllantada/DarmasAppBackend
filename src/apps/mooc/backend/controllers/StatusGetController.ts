import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

//Implementa un Controller interface  para el endpoint /status

//devuelve por defecto una promesa por que el router que hay maneja promesas si se cumplen correctamente

//todos los errores entonces van a llegar al router de todos los controllers

export default class StatusGetController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    console.log(httpStatus.OK);
    res.status(httpStatus.OK).send();
  }
}
