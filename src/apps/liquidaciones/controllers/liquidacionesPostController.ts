import { Request, Response } from 'express';

import { Controller } from '../../shared/interfaces/Controller';
export class LiquidacionesPostController implements Controller {
  run(req: Request, res: Response): Promise<void> {
    console.log('Inicie en post de Liquidaciones');

    throw new Error('Method not implemented.');
  }
}
