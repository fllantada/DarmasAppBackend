import { Request, Response } from 'express';

import { Controller } from '../shared/interfaces/Controller';
export class SedesGetController implements Controller {
  constructor() {}
  run(req: Request, res: Response): Promise<void> {
    //Solicitar get a las sedes

    //Enviar respuesta

    throw new Error('Method not implemented.');
  }
}
