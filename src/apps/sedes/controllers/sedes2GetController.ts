import { Request, Response } from 'express';

import { Controller } from '../../shared/interfaces/Controller';
export class sedes2GetController implements Controller {
  run(req: Request, res: Response): Promise<void> {
    console.log('Inicie el get a sedes2!!!');

    throw new Error('Esperando para implementar.');
  }
}
