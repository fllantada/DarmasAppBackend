import { Request, Response } from 'express';
import { UpdateProcess } from '../../Context.update/aplication/UpdateProcess';
import { Controller } from '../shared/interfaces/Controller';
import { UpdateRepository } from '../../Context.update/infrastructure/UpdateRepository';
export class UpdateController implements Controller {
  constructor() {
    console.log('update controler creado');
  }
  async run(req: Request, res: Response): Promise<void> {
    console.log('Inicie el controlador de update');
    const data = req.body;

    const repository = await new UpdateRepository();
    await new UpdateProcess(repository, ' ', data).run();

    res.send('Ejecutando actualizaciones');
  }
}
