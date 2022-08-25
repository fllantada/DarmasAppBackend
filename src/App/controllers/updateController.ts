import { Request, Response } from 'express';
import { UpdateProcess } from '../../Context.update/aplication/UpdateProcess';
import { Controller } from '../shared/interfaces/Controller';
import { DentalinkRepository } from '../../Shared/infrastructure/DentalinkRepository';
import { MongoRepository } from '../../Shared/infrastructure/MongoRepository';
import { DatesRepository } from '../../Shared/infrastructure/DatesRepository';

export class UpdateController implements Controller {
  constructor() {}
  async run(req: Request, res: Response): Promise<void> {
    await new UpdateProcess(new DentalinkRepository(), new MongoRepository(), new DatesRepository()).run();

    res.send('Ejecutando actualizaciones');
  }
}
