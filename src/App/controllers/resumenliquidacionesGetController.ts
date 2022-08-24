import { Request, Response } from 'express';
import { LiquidacionesSemanales } from '../../Context.liquidaciones/Liquidaciones/aplication/LiquidacionesSemanales';
import { Controller } from '../shared/interfaces/Controller';
import { DentalinkRepository } from '../../Shared/infrastructure/dentalinkRepository';
import { MongoRepository } from '../../Shared/infrastructure/MongoRepository';
import { DatesRepository } from '../../Shared/infrastructure/DatesRepository';

export class ResumenLiquidacionesGetController implements Controller {
  constructor() {}
  async run(req: Request, res: Response): Promise<void> {
    const liquidaciones = await new LiquidacionesSemanales(
      new DentalinkRepository(),
      new MongoRepository(),
      new DatesRepository()
    ).run();

    res.send(liquidaciones);
  }
}
