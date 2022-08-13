import { Request, Response } from 'express';

import { Controller } from '../../shared/interfaces/Controller';
export class SedesGetController implements Controller {
  run(req: Request, res: Response): Promise<void> {
    console.log('Inicie el get a sedes');
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    throw new Error('Method not implemented.');
  }
}
