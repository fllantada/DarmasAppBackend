import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from '../../shared/interfaces/Controller';
export class LiquidacionesPostController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    console.log('Inicie en post de Liquidaciones');
    res.send(httpStatus.CREATED).send();
  }
}
