import { Request, Response } from 'express';
import { LiquidacionesSemanales } from '../../Context.liquidaciones/Liquidaciones/aplication/LiquidacionesSemanales';
import { Controller } from '../shared/interfaces/Controller';
import { DentalinkRepository } from '../../Context.liquidaciones/Liquidaciones/infrastructure/dentalinkRepository';
import { MongoRepository } from '../../Context.liquidaciones/Liquidaciones/infrastructure/MongoRepository';
import { DatesRepository } from '../../Context.liquidaciones/Liquidaciones/infrastructure/DatesRepository';

export class ResumenLiquidacionesGetController implements Controller {
  constructor() {}
  async run(req: Request, res: Response): Promise<void> {
    console.log('Inicio controlador de resumen liquidaciones');

    const liquidaciones = await new LiquidacionesSemanales(
      new DentalinkRepository(),
      new MongoRepository(),
      new DatesRepository()
    ).run();

    console.log('Por devolver Liquidaciones', liquidaciones);

    res.send('ok');
  }
}
