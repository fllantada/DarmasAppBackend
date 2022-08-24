import { Request, Response } from 'express';
import { LiquidacionesSemanales } from '../../Context.liquidaciones/Liquidaciones/aplication/LiquidacionesSemanales';
import { Controller } from '../shared/interfaces/Controller';
import { LiquidacionesSemanalesRepository } from '../../Context.liquidaciones/Liquidaciones/infrastructure/LiquidacionesSemanalesRepository';
import { DatesRepository } from '../../Shared/infrastructure/DatesRepository';
import { MongoRepository } from '../../Shared/infrastructure/MongoRepository';

export class ResumenLiquidacionesGetController implements Controller {
  constructor() {}
  async run(req: Request, res: Response): Promise<void> {
    const repository = new LiquidacionesSemanalesRepository(new MongoRepository(), new DatesRepository());

    const liquidaciones = await new LiquidacionesSemanales(repository).run();

    res.send(liquidaciones);
  }
}
